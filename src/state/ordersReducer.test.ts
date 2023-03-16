import {GoodsType} from "../App";


const initialState: GoodsType[] = []

export const ordersReducer = (state: GoodsType[] = initialState, action: OrderReducerActionType) => {
    switch (action.type) {
        case "ADD-TO-CART":{
            return [...state, action.payload.item]
        }
        default:
            return state
    }
}

type OrderReducerActionType = AddToCartACType

type AddToCartACType = ReturnType<typeof addToCartAC>
export const addToCartAC = (item: GoodsType) => {
    return {
        type: 'ADD-TO-CART',
        payload:{
            item
        }
    } as const
}