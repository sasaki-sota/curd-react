// combineReducersがreducerを結合する関数
import { combineReducers } from "redux";
import count from './count'

export default combineReducers({ count })