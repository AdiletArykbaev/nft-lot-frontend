import { createStore } from "redux";
import { combineReducers } from "redux";
import MainState from "./Reducers/MainPageReducer";
import UserReducer from "./Reducers/UserReducer";
const reducers = combineReducers({ MainState, walletInfo: UserReducer });
export const store = createStore(reducers);
