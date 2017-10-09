import 'isomorphic-fetch';
import {
    ABOUT_REQUEST,
    ABOUT_RECEIVE,
    ABOUT_FAILURE,
} from './constant';
import cfg from './../../../config/domain';

export const request = n => ({
    type: ABOUT_REQUEST,
    amount: n
});

export const receive = (n, stories) => ({
    type: ABOUT_RECEIVE,
    amount: n,
    response: stories
});

export const failure = (n, error) => ({
    type: ABOUT_FAILURE,
    amount: n,
    error: error
});

export const getAbout = n => (dispatch) => {
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

