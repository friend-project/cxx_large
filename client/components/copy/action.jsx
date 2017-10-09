import 'isomorphic-fetch';
import {
    COPY_REQUEST,
    COPY_RECEIVE,
    COPY_FAILURE,
} from './constant';
import cfg from './../../../config/domain';

export const request = n => ({
    type: COPY_REQUEST,
    amount: n
});

export const receive = (n, stories) => ({
    type: COPY_RECEIVE,
    amount: n,
    response: stories
});

export const failure = (n, error) => ({
    type: COPY_FAILURE,
    amount: n,
    error: error
});

export const getCopy = n => (dispatch) => {
    dispatch(request(n));
    return fetch(`${cfg.web}/api/generalDetail/${n}`)
        .then(response => {
            if (response.status > 200) {
                dispatch(failure(n, response.status));
            }
            return response.json();
        })
        .then(stories => dispatch(receive(n, stories)));
};

