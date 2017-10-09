import 'isomorphic-fetch';
import cfg from '../../../config/domain';
import {
    EXHIBITION_DETAIL_REQUEST,
    EXHIBITION_DETAIL_RECEIVE,
    EXHIBITION_DETAIL_FAILURE,
} from './constant';

export const request = n => ({
    type: EXHIBITION_DETAIL_REQUEST,
    amount: n
});

export const receive = (n, stories) => ({
    type: EXHIBITION_DETAIL_RECEIVE,
    amount: n,
    response: stories
});

export const failure = (n, error) => ({
    type: EXHIBITION_DETAIL_FAILURE,
    amount: n,
    error: error
});

export const getDetail = n => (dispatch) => {
    dispatch(request(n));
    return fetch(`${cfg.web}/api/exhibitionDetail/${n.id}`)
        .then(response => {
            if (response.status > 200) {
                dispatch(failure(n, response.status));
            }
            return response.json();
        })
        .then(stories => dispatch(receive(n, stories)));
};
