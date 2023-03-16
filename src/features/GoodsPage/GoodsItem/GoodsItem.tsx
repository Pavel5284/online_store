import {GoodsType} from "../../../App";
import style from './GoodsItem.module.css'


type PropsType = {
    item: GoodsType
    addToCart: (item: GoodsType) => void
}

export const GoodsItem = (props: PropsType) => {

    const addToCartClickHandler = () => props.addToCart(props.item)

    return (
        <div >
            <div className={style.item__container} key={props.item.id}>
                <img className={style.item__image} src={props.item.image} alt="goods_image"/>
                <h2 className={style.item__title}>{props.item.title}</h2>
                <div className={style.item__description}>{props.item.description}</div>
                <h3 className={style.item__price}>{props.item.price}$</h3>
            </div>
            <button onClick={addToCartClickHandler}>+</button>
        </div>
    )
}