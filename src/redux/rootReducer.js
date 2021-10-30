import { combineReducers } from "redux";
import { userReducers, AuthReducer } from "./reducer";

const rootReducer = combineReducers({
  userData: userReducers,
  authData: AuthReducer,
});

export default rootReducer;
