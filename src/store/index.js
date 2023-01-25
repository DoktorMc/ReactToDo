import { createStore } from "redux";
import rootReducer from "./reducers/todoReducer";

export const store = createStore(rootReducer);

export default store;
