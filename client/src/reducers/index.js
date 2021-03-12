import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import catchReducer from "./catchReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  posts: catchReducer,
});
