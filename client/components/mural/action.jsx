import 'isomorphic-fetch';
import cfg from '../../../config/domain';
import {
  MURAL_REQUEST,
  MURAL_RECEIVE,
  MURAL_FAILURE,
} from './constant';

export const request = n => ({
  type: MURAL_REQUEST,
  amount: n
});

export const receive = (n, stories) => ({
  type: MURAL_RECEIVE,
  amount: n,
  response: stories
});

export const failure = (n, error) => ({
  type: MURAL_FAILURE,
  amount: n,
  error: error
});

export const getMural = n => (dispatch) => {
  dispatch(request(n));
  return fetch(
    `${cfg.web}/api/muralList`,
      {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
          'Access-Control-Allow-Credentials': true,
        }),
        cache: 'default',
        body: JSON.stringify(n),
      },
    )
    .then(response => {
      if (response.status > 200) {
        dispatch(failure(n, response.status));
      }
      return response.json();
    })
  .then(stories => dispatch(receive(n, stories)));
};
