import {
    EXHIBITION_DETAIL_REQUEST,
    EXHIBITION_DETAIL_RECEIVE,
    EXHIBITION_DETAIL_FAILURE,
} from './constant';

export default (state = {
    isFetching: false,
    response: [],
    error: null,
}, action) => {
    switch (action.type) {
        case EXHIBITION_DETAIL_REQUEST:
            return {
                ...state,
                error: null,
                isFetching: true,
            };
        case EXHIBITION_DETAIL_RECEIVE:
            return {
                ...state,
                isFetching: false,
                response: action.response,
            };
        case EXHIBITION_DETAIL_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state;
    }
};
