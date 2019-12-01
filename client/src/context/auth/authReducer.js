import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return { ...state };
    }
    case REGISTER_FAIL: {
      return { ...state };
    }
    case LOGIN_FAIL: {
      return { ...state };
    }
    case USER_LOADED: {
      return { ...state };
    }
    case AUTH_ERROR: {
      return { ...state };
    }
    case LOGOUT: {
      return { ...state };
    }
    case CLEAR_ERROR: {
      return { ...state };
    }

    default:
      return {
        state
      };
  }
};
