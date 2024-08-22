import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if (itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? {
                ...orderItem,
                quantity: orderItem.quantity + 1
            } : orderItem)
            setOrder(updateOrder)
        } else {
            const newItem: OrderItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }

    }

    const removeItem = (id: MenuItem['id']) => {
        // console.log('probando...')
        setOrder(order.filter(item => item.id !== id))
    }

    return {
        addItem,
        order,
        removeItem
    }
}
