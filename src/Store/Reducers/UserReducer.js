import { CHANGE_ADDRESS, CHANGE_BALANCE } from "../types";
const initialState = {
  address: " adilet",
  balance: "wallet",
  signer: "",
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADDRESS:
      return {
        ...state,
        address: action.address,
        signer: action.signer,
      };
    case CHANGE_BALANCE:
      return {
        ...state,
        balance: action.balance,
      };
    default:
      return state;
  }
}

export default UserReducer;
