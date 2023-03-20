import { combineReducers } from "redux";
import {goodsReducer} from "./goodsReducer";
import {ordersReducer} from "./ordersReducer";

export const rootReducer = combineReducers({
    goods: goodsReducer,
    orders: ordersReducer
})