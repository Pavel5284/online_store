import {addToCartAC, deleteFromCartAC, ordersReducer} from "./ordersReducer";
import {GoodsType} from "../App";
import iPhone from "../commons/goodsImage/iPhone14.jpeg";
import Samsung from "../commons/goodsImage/samsung.jpg";
import Xiaomi from "../commons/goodsImage/xiaomi.jpg";
import Nokia from "../commons/goodsImage/nokia.jpg";
import Honor from "../commons/goodsImage/honor.jpg";
import RealMe from "../commons/goodsImage/realme.jpg";


let startState: GoodsType[] = [
    {id: 1, image: iPhone, title: 'IPhone', description: '12Mp, 128Gb', price: '1000', category: 'phones'},
    {id: 2, image: Samsung, title: 'Samsung', description: '12Mp, 128Gb', price: '950', category: 'phones'},
    {id: 3, image: Xiaomi, title: 'Xiaomi', description: 'Top for this price', price: '800', category: 'phones'},
    {id: 4, image: Nokia, title: 'Nokia', description: '12Mp, 128Gb', price: '700', category: 'oldPhones'},
    {id: 5, image: Honor, title: 'Honor', description: '12Mp, 128Gb', price: '750', category: 'phones'},
    {id: 6, image: RealMe, title: 'RealMe', description: '12Mp, 128Gb', price: '600', category: 'phones'},
]

test('correct good should be added in cart', () => {
    let newOrder: GoodsType = {
        id:7,
        image: '',
        title: 'neworderitem',
        description: '',
        price: '',
        category: 'all'
    }

    const endState = ordersReducer(startState, addToCartAC({item: newOrder}))

    expect(endState.length).toBe(7)
    expect(endState[0].title).toBe('neworderitem')
})
test('correct good should be deleted from cart', () => {
    const endState = ordersReducer(startState, deleteFromCartAC({id:1}))

    expect(endState.length).toBe(5)
    expect(endState[0].id).toBe(2)
})