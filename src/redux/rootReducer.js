import { combineReducers } from "redux";
import { userReducers, authReducer, accountReducer } from "./reducer";

const rootReducer = combineReducers({
  userData: userReducers,
  authData: authReducer,
  accountData: accountReducer,
});

export default rootReducer;
