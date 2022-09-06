import { ethers } from "ethers";

export async function connectToSmart(contractAddress, abi, provider) {
  const Contract = new ethers.Contract(contractAddress, abi, provider);

  return Contract;
}
