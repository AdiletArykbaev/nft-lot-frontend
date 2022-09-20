import React from "react";
import styles from "./styles.module.scss";
import logo from "../../../assets/icons/logo.png";
import { NavLink as Link } from "react-router-dom";
import WalletBtn from "../../Atoms/WalletBtn";
import personIcon from "../../../assets/icons/user.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeBalanceActionCreator } from "../../../Store/actions/UserActions.js";
import { changeIndexAction } from "../../../Store/actions/LotteryPageActions.js";

import { connectToSmart } from "../../../Web3/interact";
import { ethers } from "ethers";
import { useEffect } from "react";
import TokenAbi from "../../../Contracts/token.json";
import LotteryAbi from "../../../Contracts/Lottery.json";
const Header = () => {
  const { address, signer } = useSelector((state) => state.walletInfo);
  const index = useSelector((state) => state.lotteryInfo);
  const dispatch = useDispatch();
  const lotteryConnect = async () => {
    const lottery = await connectToSmart(
      "0xdf66FC941600712af65D345A268c25a2888dA044",
      LotteryAbi,
      signer
    );

    const lotteryNumber = await lottery.currentLotteryNumber();
    const res = parseInt(lotteryNumber, 16);
    dispatch(changeIndexAction(res));
    return lottery;
  };

  useEffect(() => {
    const connectToToken = async () => {
      const token = await connectToSmart(
        "0xeFd5fa314D80310cb9600eDd21CB71f513F5E4F2",
        TokenAbi,
        signer
      );

      const balance_hex = await token.functions.balanceOf(address);
      const balance_number = ethers.utils.formatUnits(balance_hex[0]._hex);

      dispatch(changeBalanceActionCreator(balance_number));
    };
    connectToToken();
    lotteryConnect();
    console.log("index", index);
  }, [address]);
  return (
    <header className={styles.wrapper}>
      <div className="wrapper">
        <div className={styles.content}>
          <div className={styles.logoBlock}>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <h1>
              MARMOSET <br /> TOKEN
            </h1>
          </div>
          <nav className={styles.navigation}>
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
              key="6"
            >
              Home
            </Link>
            <Link
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
              to="/us"
              key="5"
            >
              About us
            </Link>
            <Link
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
              to="/lottery"
              key="4"
            >
              Lottery
            </Link>
            <Link
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
              to="/shop"
              key="3"
            >
              Shop MMT
            </Link>
            <Link
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
              to="/paper"
              key="2"
            >
              White Paper
            </Link>
            <Link
              key="1"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
              to="/faq"
            >
              FAQ
            </Link>
          </nav>
          <div className={styles.btns}>
            <WalletBtn onClick={() => {}} />
            <li className={styles.changeLang}>RU</li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
