import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {GoodsPage} from "./features/GoodsPage/GoodsPage";
import {addToCartAC} from "./state/ordersReducer";
import {changeCategoryFilterAC} from "./state/goodsReducer";
import Header from "./components/header/Header";
import {useAppDispatch} from "./state/hooks";

export type FilterType = 'all' | 'phones' | 'oldPhones'

export type GoodsType = {
    id: number,
    image: string,
    title: string,
    description: string,
    price: string
    category: FilterType
}

function App() {
    const dispatch = useAppDispatch()

    const goods = useSelector<AppRootStateType, GoodsType[]>(state => state.goods.items)
    const orders = useSelector<AppRootStateType, GoodsType[]>(state => state.orders)
    const filter = useSelector<AppRootStateType, FilterType>(state => state.goods.filter)
    console.log(orders)
    const addToCart = (item: GoodsType) => {
        const test = orders.find(el => el.id === item.id)
        if (test) {
            return alert('exist ')
        }
        dispatch(addToCartAC({item}))
    }


    const changeCategoryFilter = (category: FilterType) => {
        dispatch(changeCategoryFilterAC(category))
    }


    return (
        <div className="App">
            <Header/>
            <GoodsPage
                goods={goods}
                addToCart={addToCart}
                changeCategoryFilter={changeCategoryFilter}
                filter={filter}
            />

        </div>
    );
}

export default App;
