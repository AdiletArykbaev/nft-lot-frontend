import { CHANGE_ADDRESS, CHANGE_BALANCE } from "../types";
export function changeDataActionCreator(value, signer) {
  return {
    type: CHANGE_ADDRESS,
    address: value,
    signer,
  };
}
export function changeBalanceActionCreator(value) {
  return {
    type: CHANGE_BALANCE,
    balance: value,
  };
}
