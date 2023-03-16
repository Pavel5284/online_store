import {combineReducers, createStore} from "redux";
import { goodsReducer } from "./goodsReducer";
import {ordersReducer} from "./ordersReducer";

const rootReducer = combineReducers({
    goods: goodsReducer,
    orders: ordersReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

// @ts-ignore
window.store = store