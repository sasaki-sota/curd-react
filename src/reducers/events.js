import _ from 'lodash';
import { READ_EVENTS, DELETE_EVENT }  from "../actions";

//eventsはからのオブジェクトとする
export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
            // アクションの部分でidが渡ってきているのか
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}