import {
  AUTHENTICATE_USER,
  CLEAR_AUTH,
  EDIT_USER_FAILED,
  EDIT_USER_SUCCESSFUL,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOG_OUT,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false,
};
export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case CLEAR_AUTH:
      return {
        ...state,
        error: null,
      };
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        inProgress: false,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        inProgress: false,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };
    case EDIT_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.user,
        error: false,
      };
    case EDIT_USER_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
