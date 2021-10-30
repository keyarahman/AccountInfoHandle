import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};
const initialLoginState = {
  isLoading: true,
  email: null,
  userDetails: [],
};
export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.EDIT_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const AuthReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    // case RETRIEVE_TOKEN:
    //   return {
    //     ...initialLoginState,
    //     userToken: action.token,
    //     isLoading: false,
    //   };
    case types.LOGIN:
      return {
        ...initialLoginState,
        userDetails: action.payload,
        isLoading: false,
      };
    // case LOGOUT:
    //   return {
    //     ...initialLoginState,
    //     email: null,
    //     userToken: null,
    //     isLoading: false,
    //   };
    default:
      return state;
  }
};