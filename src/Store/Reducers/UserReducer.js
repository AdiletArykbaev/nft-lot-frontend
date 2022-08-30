const initialState = {
  address: " adilet",
  balance: "sign in to wallet",
};

const GET_BALANCE = "GET_BALANCE";

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BALANCE:
      state.balance = action.balance;
      return state;
      break;
    default:
      return state;
  }
}
export function changeDataActionCreator(value) {
  return {
    type: GET_BALANCE,
    balance: value,
  };
}

export default UserReducer;
