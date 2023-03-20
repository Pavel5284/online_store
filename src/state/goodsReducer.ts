import {FilterType, GoodsType} from "../App";
import iPhone from '../commons/goodsImage/iPhone14.jpeg'
import Samsung from '../commons/goodsImage/samsung.jpg'
import Xiaomi from '../commons/goodsImage/xiaomi.jpg'
import Nokia from '../commons/goodsImage/nokia.jpg'
import Honor from '../commons/goodsImage/honor.jpg'
import RealMe from '../commons/goodsImage/realme.jpg'

import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type GoodsAndFilterType = {
    items: GoodsType[]
    filter: FilterType
}
const initialState: GoodsAndFilterType = {
    items: [
        {id: 1, image: iPhone, title: 'IPhone', description: '12Mp, 128Gb', price: '1000', category: 'phones'},
        {id: 2, image: Samsung, title: 'Samsung', description: '12Mp, 128Gb', price: '950', category: 'phones'},
        {id: 3, image: Xiaomi, title: 'Xiaomi', description: 'Top for this price', price: '800', category: 'phones'},
        {id: 4, image: Nokia, title: 'Nokia', description: '12Mp, 128Gb', price: '700', category: 'oldPhones'},
        {id: 5, image: Honor, title: 'Honor', description: '12Mp, 128Gb', price: '750', category: 'phones'},
        {id: 6, image: RealMe, title: 'RealMe', description: '12Mp, 128Gb', price: '600', category: 'phones'},
    ],
    filter: 'all'
}

export const goodsSlice = createSlice ({
    name:'goods',
    initialState,
    reducers:{
        changeCategoryFilter(state, action: PayloadAction<FilterType>) {
            state.filter= action.payload
        }
    }
})

export const {
    changeCategoryFilter: changeCategoryFilterAC,
} = goodsSlice.actions

export const goodsReducer = goodsSlice.reducer

//type GoodsReducerType = AddToBasketACType | ChangeCategoryFilterACType

/*
export const goodsReducer = (state = initialState, action: GoodsReducerType): GoodsAndFilterType => {
    switch (action.type) {
        case "ADD-TO-CART": {
            return state
        }
        case "CHANGE-CATEGORY-FILTER": {
            /!*    return state.filter(el => el.category === action.payload.category)*!/
            return {...state, filter: action.payload}
        }
        default:
            return state
    }
}

type AddToBasketACType = ReturnType<typeof addToBasketAC>
export const addToBasketAC = (id: string) => {
    return {
        type: 'ADD-TO-CART',
        payload: {
            id
        }
    } as const
}

type ChangeCategoryFilterACType = ReturnType<typeof changeCategoryFilterAC>
export const changeCategoryFilterAC = (category: FilterType) => {
    return {
        type: 'CHANGE-CATEGORY-FILTER',
        payload: category
    } as const
}*/
