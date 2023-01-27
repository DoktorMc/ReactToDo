import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

// The key of this object will be the name of the store
const rootReducers = combineReducers({ todo: todoReducer });

export default rootReducers;
