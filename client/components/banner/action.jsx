import 'isomorphic-fetch';
import {
    BANNER_REQUEST,
    BANNER_RECEIVE,
    BANNER_FAILURE,
} from './constant';
import cfg from './../../../config/domain';

export const request = n => ({
    type: BANNER_REQUEST,
    amount: n
});

export const receive = (n, stories) => ({
    type: BANNER_RECEIVE,
    amount: n,
    response: stories
});

export const failure = (n, error) => ({
    type: BANNER_FAILURE,
    amount: n,
    error: error
});

export const getBanner = n => (dispatch) => {
    dispatch(request(n));
    return fetch(`${cfg.web}/api/bannerList`)
        .then(response => {
            if (response.status > 200) {
                dispatch(failure(n, response.status));
            }
            return response.json();
        })
        .then(stories => dispatch(receive(n, stories)));
};
