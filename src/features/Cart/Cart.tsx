import style from './Cart.module.css'
import {GoodsType} from "../../App";

type PropsType= {
    item:GoodsType
    deleteFromCartHandler: (id: number) => void
}

export const Cart = (props: PropsType) => {

    const deleteClickHandler = () => {
        props.deleteFromCartHandler(props.item.id)
    }

    return <div className={style.item}>
        <img className={style.item__image} src={props.item.image} alt="goods_image"/>
        <h2 className={style.item__title}>{props.item.title}</h2>
        <h3 className={style.item__price}>{props.item.price}$</h3>
        <button onClick={deleteClickHandler}>X</button>
    </div>
}