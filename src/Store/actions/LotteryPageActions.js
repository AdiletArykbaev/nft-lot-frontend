import { CHANGE_DATA } from "../types";

export function changeDataActionCreator(winnerNumbers, myNumbers, date) {
  return {
    type: CHANGE_DATA,
    winnerNumbers: winnerNumbers,
    myNumbers: myNumbers,
    date: date,
  };
}
