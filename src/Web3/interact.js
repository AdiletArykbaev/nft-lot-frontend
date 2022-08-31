import abi from "../Contracts/token.json";
import { useSelector } from "react-redux";
import { ethers, providers } from "ethers";

export async function connectToToken(signer) {
  const infuraKey = "0157349369244f93accda102cda7ba42";
  const contractAddress = "0xF041C3D3F87FC9F406a9EEB4d7a0D26aB314DC00";
  const proider =
    "https://rinkeby.infura.io/v3/0157349369244f93accda102cda7ba42";
  const Token = new ethers.Contract(contractAddress, abi);
  console.log(Token);
  return Token;
}
