import { formatCurrency } from "../helpers"
import { OrderAction } from "../reducer/order-reducer"
import { OrderItem } from "../types"
import { ButtonDelete } from "./ButtonDelete/ButtonDelete"

type OrderContentsProps = {
    order: OrderItem[]
    dispatch: React.Dispatch<OrderAction>
}

export const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className="space-y-3 mt-10">
                {order.map(item => (
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
                            dispatch={dispatch}
                            item={item}
                        />
                    </div>
                ))
                }
            </div>
        </div>
    )
}
