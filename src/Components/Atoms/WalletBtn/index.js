import React from "react";
import styles from "./styles.module.scss";
import metamask from "../../../assets/icons/meta-mask.svg";

const WalletBtn = ({ balance }) => {
  return (
    <button className={styles.wrapper}>
      <div className={styles.firstpart}>
        <img src={metamask} alt="metamask icon" />
        <p className={styles.text}>{balance}</p>
      </div>
      <div className={styles.secondpart}></div>
    </button>
  );
};

export default WalletBtn;
