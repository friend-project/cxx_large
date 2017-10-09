import 'isomorphic-fetch';
import cfg from '../../../config/domain';
import {
    EXHIBITION_LIST_REQUEST,
    EXHIBITION_LIST_RECEIVE,
    EXHIBITION_LIST_FAILURE,
} from './constant';

export const request = n => ({
    type: EXHIBITION_LIST_REQUEST,
    amount: n
});

export const receive = (n, stories) => ({
    type: EXHIBITION_LIST_RECEIVE,
    amount: n,
    response: stories
});

export const failure = (n, error) => ({
    type: EXHIBITION_LIST_FAILURE,
    amount: n,
    error: error
});

export const post = n => (dispatch) => {
    dispatch(request(n));
    return fetch(`${cfg.web}/api/exhibitionList`)
        .then(response => {
            if (response.status > 200) {
                dispatch(failure(n, response.status));
            }
            return response.json();
        })
        .then(stories => dispatch(receive(n, stories)));
};
