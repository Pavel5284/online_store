import {CategoryType, GoodsType} from "../App";
import iPhone from '../commons/goodsImage/iPhone14.jpeg'
import Samsung from '../commons/goodsImage/samsung.jpg'
import Xiaomi from '../commons/goodsImage/xiaomi.jpg'
import Nokia from '../commons/goodsImage/nokia.jpg'
import Honor from '../commons/goodsImage/honor.jpg'
import RealMe from '../commons/goodsImage/realme.jpg'
import { v1 } from "uuid";

export let goodsId = v1();


const initialState: GoodsType[] = [
    {id: 1, image: iPhone, title: 'IPhone', description: '12Mp, 128Gb', price: '1000', category: 'phones'},
    {id: 2, image: Samsung, title: 'Samsung', description: '12Mp, 128Gb', price: '950', category: 'phones'},
    {id: 3, image: Xiaomi, title: 'Xiaomi', description: 'Top for this price', price: '800', category: 'phones'},
    {id: 4, image: Nokia, title: 'Nokia', description: '12Mp, 128Gb', price: '700', category: 'oldPhones'},
    {id: 5, image: Honor, title: 'Honor', description: '12Mp, 128Gb', price: '750', category: 'phones'},
    {id: 6, image: RealMe, title: 'RealMe', description: '12Mp, 128Gb', price: '600', category: 'phones'},
]

type GoodsReducerType = AddToBasketACType | ChangeCategoryFilterACType

export const goodsReducer = (state: GoodsType[] = initialState, action: GoodsReducerType): GoodsType[] => {
    switch (action.type) {
        case "ADD-TO-CART": {
            return state
        }
        case "CHANGE-CATEGORY-FILTER": {
            return state.filter(el => el.category === action.payload.category)
        }
        default:
            return state
    }
}

type AddToBasketACType = ReturnType<typeof addToBasketAC>
export const addToBasketAC=(id: string) => {
    return {
        type: 'ADD-TO-CART',
        payload: {
            id
        }
    } as const
}

type ChangeCategoryFilterACType = ReturnType<typeof changeCategoryFilterAC>
export const changeCategoryFilterAC = (category: CategoryType) => {
    return {
        type: 'CHANGE-CATEGORY-FILTER',
        payload: {category}
    } as const
}