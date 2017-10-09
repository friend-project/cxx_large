import {
  MURAL_REQUEST,
  MURAL_RECEIVE,
  MURAL_FAILURE,
} from './constant';

export default (state = {
  isFetching: false,
  response: [],
  error: null,
}, action) => {
  switch (action.type) {
    case MURAL_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case MURAL_RECEIVE:
      return {
        ...state,
        isFetching: false,
        response: action.response,
      };
    case MURAL_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
};
