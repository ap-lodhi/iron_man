import { combineReducers } from "redux";
import  reducerState from "./reducer";

const store= combineReducers({
  text: reducerState,
});

export default store;