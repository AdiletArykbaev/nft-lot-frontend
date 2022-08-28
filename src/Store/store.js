import { createStore } from "redux";
import { combineReducers } from "redux";
import MainState from "./Reducers/MainPageReducer";

const reducers = combineReducers({MainState});
export const store = createStore(reducers);
