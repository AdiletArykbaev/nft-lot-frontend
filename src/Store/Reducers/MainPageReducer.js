const initialState = {
  name: " adilet",
  password: "huskar275206",
};

const CHANGE_NAME = "CHANGE_NAME ";

function MainState(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      state.name = action.value;
      return state;
      break;

    default:
      return state;
  }
}
export default MainState;
