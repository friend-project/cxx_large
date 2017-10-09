import {
    EXHIBITION_LIST_REQUEST,
    EXHIBITION_LIST_RECEIVE,
    EXHIBITION_LIST_FAILURE,
} from './constant';

export default (state = {
    isFetching: false,
    response: [],
    error: null,
}, action) => {
    switch (action.type) {
        case EXHIBITION_LIST_REQUEST:
            return {
                ...state,
                error: null,
                isFetching: true,
            };
        case EXHIBITION_LIST_RECEIVE:
            return {
                ...state,
                isFetching: false,
                response: action.response,
            };
        case EXHIBITION_LIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state;
    }
};
