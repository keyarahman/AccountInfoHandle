import { combineReducers } from "redux";
import { userReducers, AuthReducer, accountReducer } from "./reducer";

const rootReducer = combineReducers({
  userData: userReducers,
  authData: AuthReducer,
  accountData: accountReducer,
});

export default rootReducer;
