import {GoodsType} from "../App";
import iPhone from "../commons/goodsImage/iPhone14.jpeg";
import Samsung from "../commons/goodsImage/samsung.jpg";
import Xiaomi from "../commons/goodsImage/xiaomi.jpg";
import Nokia from "../commons/goodsImage/nokia.jpg";
import Honor from "../commons/goodsImage/honor.jpg";
import RealMe from "../commons/goodsImage/realme.jpg";
import {changeCategoryFilterAC, GoodsAndFilterType, goodsReducer} from "./goodsReducer";

let startState: GoodsAndFilterType = {
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

test('correct filter should be set', () => {


    const endState = goodsReducer(startState, changeCategoryFilterAC('phones'))

    expect(endState.filter).toBe('phones')
})