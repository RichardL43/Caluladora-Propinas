import { MenuItem, OrderItem } from "../types"

export type OrderAction =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'add-tip', payload: { value: number } } |
    {type: 'place-order' }

export type OrderState = {
    order: OrderItem[],
    tip: number
    
}

export const initialState: OrderState = {
    order: [],
    tip: 0
} 

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderAction
): OrderState => {
    let updateOrder: OrderItem[] = [];
    switch (action.type) {
        case 'add-item':
            const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id);
            if (itemExist) {
                updateOrder = state.order.map(orderItem => 
                    orderItem.id === action.payload.item.id 
                        ? { ...orderItem, quantity: orderItem.quantity + 1 } 
                        : orderItem
                );
            } else {
                const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
                updateOrder = [...state.order, newItem];
            }
            return { ...state, order: updateOrder };

        case 'add-tip':
            return { ...state, tip: action.payload.value };

        case 'remove-item':
            const updatedOrder = state.order.filter(item => item.id !== action.payload.id);
            return { ...state, order: updatedOrder };
        
        case 'place-order':
            return{...initialState}

        default:
            return state;
    }
}
