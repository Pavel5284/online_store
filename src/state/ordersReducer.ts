import { v1 } from "uuid";
import {GoodsType} from "../App";


const initialState: GoodsType[] = []

export const ordersReducer = (state: GoodsType[] = initialState, action: OrdersReducerActionType) => {
    switch (action.type) {
        case "ADD-TO-CART":{
            return [...state, {id: action.payload.item.id, image: action.payload.item.image,
                title: action.payload.item.title, description: action.payload.item.description,
                price: action.payload.item.price}]
        }
        case "DELETE-FROM-CART":{
            return state.filter(el => el.id !== action.payload.id)
        }
        default:
            return state
    }
}

type OrdersReducerActionType = AddToCartACType | DeleteFromCartACType

type AddToCartACType = ReturnType<typeof addToCartAC>
export const addToCartAC = (item: GoodsType) => {
    return {
        type: 'ADD-TO-CART',
        payload:{
            item
        },
    } as const
}

type DeleteFromCartACType = ReturnType<typeof deleteFromCartAC>
export const deleteFromCartAC = (id: number) => {
    return{
        type: 'DELETE-FROM-CART',
        payload: {
            id
        }
    } as const
}