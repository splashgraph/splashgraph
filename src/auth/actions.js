import * as actionTypes from './actionTypes';

export function login(email, password) {
  return {
    types: [actionTypes.LOGIN_REQUEST, actionTypes.LOGIN_SUCCESS, actionTypes.LOGIN_FAILURE],
    promise: client => client.post('/users/login', {email, password})
  };
}

export function logout() {
  return {
    types: [actionTypes.LOGOUT_REQUEST, actionTypes.LOGOUT_SUCCESS, actionTypes.LOGOUT_FAILURE],
    promise: client => client.post('/users/logout')
  };
}