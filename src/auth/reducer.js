import * as actionTypes from './actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loginIsLoading: true,
        loginIsLoaded: false
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginIsLoading: false,
        loginIsLoaded: true,
        isAuthenticated: true,
        token: action.result.data.token,
        user: action.result.data.user
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loginIsLoading: false,
        loginIsLoaded: false
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}