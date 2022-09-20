import React from "react";
import styles from "./styles.module.scss";
import metamask from "../../../assets/icons/meta-mask.svg";
import Web3Modal from "web3modal";
import {useRef, useEffect, useState} from "react";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import {ethers, providers} from "ethers";
import {useDispatch, useSelector} from "react-redux";
import {changeDataActionCreator} from "../../../Store/actions/UserActions.js";
import {connectToToken} from "../../../Web3/interact";

const WalletBtn = () => {
    const [web3Modal, setWeb3Modal] = useState(null);
    const {balance} = useSelector((state) => state.walletInfo);
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
        <button className={styles.wrapper} onClick={connectWallet}>
            {/*<div className={styles.firstpart}>*/}
            {/*  <img src={metamask} alt="metamask icon" />*/}
            {/*  <p className={styles.text}>{balance}</p>*/}
            {/*</div>*/}
            {/*<div className={styles.secondpart}></div>*/}
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M20 4C20 1.79086 18.2091 0 16 0H4C1.79086 0 0 1.79086 0 4V5.5H4C5.933 5.5 7.5 7.067 7.5 9C7.5 10.933 5.933 12.5 4 12.5H0V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4ZM4 7C5.10457 7 6 7.89543 6 9C6 10.1046 5.10457 11 4 11H0V7H4Z"
                      fill="white"/>
            </svg>
            {balance ? balance : 'Connect wallet'}
        </button>
    );
};

export default WalletBtn;
