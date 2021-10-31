import * as types from "./actionType";

const initialUserState = {
  users: [],
  user: {},
  loading: true,
};
const initialLoginState = {
  isLoading: true,
  email: null,
  userDetails: {},
};
const initialAccountState = {
  accounts: [],
  account: {},
  transactions: [],
  loading: true,
};
export const userReducers = (state = initialUserState, action) => {
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

export const accountReducer = (state = initialAccountState, action) => {
  switch (action.type) {
    case types.GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
        loading: false,
      };
    case types.GET_AN_ACCOUNT:
      return {
        ...state,
        account: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export const authReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    // case types.RETRIEVE_TOKEN:
    //   return {
    //     ...initialLoginState,
    //     userDetails: action.token,
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
