import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
// reducerに対して渡す
export const CREATE_EVENT = 'CREATE_EVENT'

//urlを定義(共通のURL)
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// dispatchを受け取るようにする
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    // 関数の中でdispatchをすることができるようになる
    dispatch({ type: READ_EVENTS, response })
}
// values でtitleとbodyを受け取る
export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch({ type: CREATE_EVENT, response })
}
