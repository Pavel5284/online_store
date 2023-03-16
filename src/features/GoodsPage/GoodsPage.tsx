import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {FilterType, GoodsType} from "../../App";
import {GoodsItem} from "./GoodsItem/GoodsItem";
import React from "react";
import style from './GoodsPage.module.css'
import {addToCartAC} from "../../state/ordersReducer";
import {changeCategoryFilterAC} from "../../state/goodsReducer";

type PropsType = {
    goods: GoodsType[]
    addToCart: (item: GoodsType) => void
    changeCategoryFilter: (category: FilterType) => void
    filter: FilterType
}

export const GoodsPage = (props: PropsType) => {

    const dispatch=useDispatch()

    const onAllClickHandler = () => {dispatch(changeCategoryFilterAC('all'))}
    const onPhonesClickHandler = () => {dispatch(changeCategoryFilterAC('phones'))}
    const onOldPhonesClickHandler = () => {dispatch(changeCategoryFilterAC('oldPhones'))}

let goodsForRender =props.goods

    if (props.filter === "phones") {
        goodsForRender = props.goods.filter(t =>  t.category === "phones" );
    }
    if (props.filter === "oldPhones") {
        goodsForRender = props.goods.filter(t =>  t.category === "oldPhones" );
    }


    return <div className={style.wrapper}>
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onPhonesClickHandler}>Phones</button>
            <button onClick={onOldPhonesClickHandler}>OldPhones</button>
        </div>
        {
            goodsForRender.map(e => {
                return (
                    <GoodsItem
                        key={e.id}
                        item={e}
                        addToCart={props.addToCart}
                    />
                )

            })
        }

    </div>
}