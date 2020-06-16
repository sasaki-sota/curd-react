import {INCREMENT, DECREMENT}  from "../actions";

// 状態の初期値を定義する
const initialState = {value: 0 }

// countreducerを定義
// この関数の内部で受け取ったアクションのタイプに応じて状態を変更してその結果に応じてretrunする
export default (state = initialState, action) => {
    // 条件分岐する
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1}
        case DECREMENT:
            return { value: state.value - 1}
        default:
            return state
    }
}