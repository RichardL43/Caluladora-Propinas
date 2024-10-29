import { OrderAction } from "../reducer/order-reducer"
import type { MenuItem } from "../types"


type MenuItemProps = {
    item: MenuItem
    dispatch: React.Dispatch<OrderAction>
}

export const MenuItems = ({ item, dispatch }: MenuItemProps) => {
    return (
        <button
            className="border-2 border-purple-500 hover:bg-purple-200 w-full p-3 flex justify-between"
            onClick={() => dispatch({ type: 'add-item', payload: { item } })}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
