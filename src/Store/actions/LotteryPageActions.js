import { CHANGE_DATA, CHANGE_INDEX, CHANGE_WINNER_NUMBER, CHANGE_MY_NUMBER } from "../types";

export function changeDataActionCreator(lotteries) {
  return {
    type: CHANGE_DATA,
    lotteries,
  };
}
export function changeIndexAction(index) {
  return {
    type: CHANGE_INDEX,
    index: index,
  };
}
export const changeWinnerNumberAction = (number) => {
  return {
    type: CHANGE_WINNER_NUMBER,
    value: number,
  };
};
export const changeMyNumberAction = (number) => {
  return {
    type: CHANGE_MY_NUMBER,
    value: number
  }
}
