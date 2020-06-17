import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

//urlを定義(共通のURL)
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// dispatchを受け取るようにする
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    console.log(response)
    // 関数の中でdispatchをすることができるようになる
    dispatch({ type: READ_EVENTS, response })
}
