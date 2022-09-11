import React from "react";
import styles from "./number.card.module.scss";
import { useDispatch } from "react-redux";
import { changeMyNumberAction } from "../../../Store/actions/LotteryPageActions";

const NumberCard = ({ number, type }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.box}>
      {type ? (
        <p className={styles.number}>{number}</p>
      ) : (
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          className={styles.number}
          value={number}
          type="text"
        />
      )}
    </div>
  );
};

export default NumberCard;
