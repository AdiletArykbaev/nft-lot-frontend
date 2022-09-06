import React from "react";
import styles from "./styles.module.scss";
import metamask from "../../../assets/icons/meta-mask.svg";
import Web3Modal from "web3modal";
import { useRef, useEffect, useState } from "react";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { ethers, providers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { changeDataActionCreator } from "../../../Store/actions/UserActions.js";
import { connectToToken } from "../../../Web3/interact";

const WalletBtn = () => {
  const [web3Modal, setWeb3Modal] = useState(null);
  const { balance } = useSelector((state) => state.walletInfo);
  const dispatch = useDispatch();
  async function connectWallet() {
    const provider = await web3Modal.connect();
    const ethersProvider = new providers.Web3Provider(provider);
    const userAddress = await ethersProvider.getSigner().getAddress();
    const signer = await ethersProvider.getSigner();
    dispatch(changeDataActionCreator(userAddress, signer));
    return userAddress;
  }
  useEffect(() => {
    const providerOptions = {
      walletlink: {
        package: CoinbaseWalletSDK,
        options: {
          appName: "Web 3 Modal Demo",
          infuraId: {
            4: "https://rinkeby.infura.io/v3/0157349369244f93accda102cda7ba42",
          },
        },
      },
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true,
      network: "rinkeby",
      providerOptions,
    });

    setWeb3Modal(newWeb3Modal);
  }, []);

  return (
    <button
      className={styles.wrapper}
      onClick={() => {
        connectWallet();
      }}
    >
      <div className={styles.firstpart}>
        <img src={metamask} alt="metamask icon" />
        <p className={styles.text}>{balance}</p>
      </div>
      <div className={styles.secondpart}></div>
    </button>
  );
};

export default WalletBtn;
