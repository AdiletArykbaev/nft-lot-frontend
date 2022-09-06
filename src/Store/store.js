import { createStore } from "redux";
import { combineReducers } from "redux";
import LotteryReducer from "./Reducers/LotteryReducer";
import UserReducer from "./Reducers/UserReducer";
const reducers = combineReducers({
  lotteryInfo: LotteryReducer,
  walletInfo: UserReducer,
});
export const store = createStore(reducers);
