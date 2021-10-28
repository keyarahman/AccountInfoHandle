import { combineReducers } from "redux";
import userReducers from "./reducer";

const rootReducer = combineReducers({
  userData: userReducers,
});

export default rootReducer;
