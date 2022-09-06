import { CHANGE_DATA } from "../types";
const initialState = {
  winnerNumbers: " ",
  myNumbers: "",
  date: "",
};

function MainState(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DATA:
      return {
        ...state,
        winnerNumbers: action.winnerNumbers,
        myNumbers: action.myNumbers,
        date: action.date,
      };

    default:
      return state;
  }
}
export default MainState;
