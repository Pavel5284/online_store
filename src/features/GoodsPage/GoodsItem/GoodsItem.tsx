import {GoodsType} from "../../App";
import style from './GoodsItem.module.css'

export const GoodsItem = (props: GoodsType) => {
    return <div className={style.item__container}>
        <img className={style.item__image} src={props.image} alt="goods_image"/>
        <h2 className={style.item__title}>{props.title}</h2>
        <div className={style.item__description}>{props.description}</div>
        <h3 className={style.item__price}>{props.price}</h3>

    </div>
}