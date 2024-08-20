import type { menuItem } from "../types"


type MenuItemProps = {
    item: menuItem
    addItem: (item: menuItem) => void 
}

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
            <button
            className="border-2 border-purple-500 hover:bg-purple-200 w-full p-3 flex justify-between"
            onClick={() => addItem(item)}
            >
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>
    )
}
