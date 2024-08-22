import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"
import { ButtonDelete } from "./ButtonDelete/ButtonDelete"

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

export const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className="space-y-3 mt-10">
                {order.length === 0 ?
                    <p className="text-center">La orden esta vacia</p>
                    : (
                        order.map(item => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-t border-gray-700 py-5 last-of-type:border-b "
                            >
                                <div>
                                    <p>
                                        {item.name} - {formatCurrency(item.price)}
                                    </p>
                                    <p className="font-black">
                                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>

                                <ButtonDelete
                                removeItem={removeItem}
                                item={item}
                                />
                                {/* <button>Eliminar</button> */}
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}
