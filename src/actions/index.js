export const INCREMENT = 'INCREMENT'
// reducerでも使用するために汎用的にする
export const DECREMENT = 'DECREMENT'
// これがアクションクリエーター
export const increment = () => ({
    // INCREMENTのアクション
    type: INCREMENT
})

// コンポーネント側でも使うのでexportする
export const decrement = () => ({
    // DECREMENTのアクション
    type: DECREMENT
})
