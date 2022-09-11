import { CHANGE_DATA, CHANGE_INDEX, CHANGE_WINNER_NUMBER } from "../types";
const initialState = {
  index: 1,
  lotteries: [
    {
      winnerNumbers: [1, 2, 3, 4, 5],
      myNumbers: [1, 2, 3, 4, 5],
      date: new Date(),
    },
  ],
  myNumbers: [1, 2, 3, 4, 5, 6],
  winnerNumbers: [1, 2, 3, 4, 5, 6],
};

function MainState(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DATA:
      return {
        ...state,
        lotteries: action.lotteries,
      };
    case CHANGE_INDEX:
      return {
        ...state,
        index: action.index,
      };
    case CHANGE_WINNER_NUMBER:
      return {
        ...state,
        winnerNumbers: action.value,
      };
    default:
      return state;
  }
}
export default MainState;
