import {
    BANNER_REQUEST,
    BANNER_RECEIVE,
    BANNER_FAILURE,
} from './constant';

export default (state = {
    isFetching: false,
    response: [],
    error: null,
}, action) => {
    switch (action.type) {
        case BANNER_REQUEST:
            return {
                ...state,
                error: null,
                isFetching: true,
            };
        case BANNER_RECEIVE:
            return {
                ...state,
                isFetching: false,
                response: action.response,
            };
        case BANNER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state;
    }
};
