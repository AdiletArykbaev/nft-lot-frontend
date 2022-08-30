import React from "react";
import styles from "./styles.module.scss";
import metamask from "../../../assets/icons/meta-mask.svg";
import Web3Modal from "web3modal";
import { useRef, useEffect, useState } from "react";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { ethers, providers } from "ethers";
import { useDispatch } from "react-redux";
import { changeDataActionCreator } from "../../../Store/Reducers/UserReducer";

const WalletBtn = ({ balance }) => {
  const [web3Modal, setWeb3Modal] = useState(null);
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  async function connectWallet() {
    const provider = await web3Modal.connect();
    const ethersProvider = new providers.Web3Provider(provider);
    const userAddress = await ethersProvider.getSigner().getAddress();
    const hex = await ethersProvider.getSigner().getBalance();
    const balance = ethers.utils.formatEther(hex._hex);
    dispatch(changeDataActionCreator(balance));
    console.log("my web3 modal", ethersProvider);
  }
  useEffect(() => {
    const providerOptions = {
      // walletconnect: {
      //   package: WalletConnectProvider,
      //   options: {
      //     infuraId: "0157349369244f93accda102cda7ba42",
      //   },
      // },
      walletlink: {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: "Web 3 Modal Demo", // Required
          infuraId: {
            4: "https://rinkeby.infura.io/v3/0157349369244f93accda102cda7ba42",
          }, // Required unless you provide a JSON RPC url; see `rpc` below
        },
      },
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important
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
