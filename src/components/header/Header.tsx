import {useState} from "react";
import style from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {GoodsType} from "../App";
import {Cart} from "../features/Cart/Cart";
import { deleteFromCartAC } from "../state/ordersReducer";



export const Header = () => {
    const dispatch = useDispatch()
    const orders = useSelector<AppRootStateType, GoodsType[]>( state => state.orders)
    let [cartOpen, setCartOpen] = useState<boolean>(false)

    const deleteFromCartHandler = (id: number) => {
        dispatch(deleteFromCartAC(id))
    }

    const showOrders = () => {
        let totalPrice = 0
        orders.forEach(el => totalPrice +=Number.parseFloat(el.price))
        return <div>
            {orders.map(el => {
                return (
                    <Cart key={el.id} item={el} deleteFromCartHandler={deleteFromCartHandler}/>
                )
            })}
            <p className={style.totalPrice}>Total: ${new Intl.NumberFormat().format(totalPrice)}</p>
        </div>
    }

    const showNothing = () => {
        return <div>
            <b>Cart is empty</b>
        </div>
    }

    return <header>
        <div>
            <button onClick={() => setCartOpen(cartOpen=!cartOpen)}>Cart</button>

            {cartOpen && (
                <div className={style.shop__cart}>
                    {orders.length > 0 ? showOrders() : showNothing()}
                </div>
            )}
        </div>
    </header>
}