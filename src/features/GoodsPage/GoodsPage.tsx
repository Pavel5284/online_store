import {useDispatch} from "react-redux";
import {FilterType, GoodsType} from "../../App";
import {GoodsItem} from "./GoodsItem/GoodsItem";
import React from "react";
import style from './GoodsPage.module.css'
import {changeCategoryFilterAC} from "../../state/goodsReducer";
import Button from "@mui/material/Button/Button";


type PropsType = {
    goods: GoodsType[]
    addToCart: (item: GoodsType) => void
    changeCategoryFilter: (category: FilterType) => void
    filter: FilterType
}

export const GoodsPage = (props: PropsType) => {

    const dispatch = useDispatch()

    const onAllClickHandler = () => {
        dispatch(changeCategoryFilterAC('all'))
    }
    const onPhonesClickHandler = () => {
        dispatch(changeCategoryFilterAC('phones'))
    }
    const onOldPhonesClickHandler = () => {
        dispatch(changeCategoryFilterAC('oldPhones'))
    }

    let goodsForRender = props.goods

    if (props.filter === "phones") {
        goodsForRender = props.goods.filter(t => t.category === "phones");
    }
    if (props.filter === "oldPhones") {
        goodsForRender = props.goods.filter(t => t.category === "oldPhones");
    }


    return (
        <div>
            <div className={style.filter__block}>
                <Button style={{margin: '10px'}} variant='outlined' size="small" onClick={onAllClickHandler}>All</Button>
                <Button style={{margin: '10px'}} variant='outlined' size="small" onClick={onPhonesClickHandler}>Phones</Button>
                <Button style={{margin: '10px'}} variant='outlined' size="small" onClick={onOldPhonesClickHandler}>OldPhones</Button>
            </div>

            <div className={style.items__block}>

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
        </div>
    )
}