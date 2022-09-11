import React, { useEffect } from "react";
import styles from "./archive.module.scss";
import ArchiveTable from "../../Atoms/ArchiveTable";
import { connectToSmart } from "../../../Web3/interact.js";
import { useDispatch, useSelector } from "react-redux";
import { formatArray } from "../../../Utils/FormatArray.js";
import { formatDate } from "../../../Utils/FormatDate.js";

import LotteryAbi from "../../../Contracts/Lottery.json";
import { changeDataActionCreator } from "../../../Store/actions/LotteryPageActions.js";

const Archive = () => {
  const dispatch = useDispatch();
  const { lotteries } = useSelector((state) => state.lotteryInfo);

  const { signer } = useSelector((state) => state.walletInfo);
  
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Архив лотереи</h2>
      <table className={styles.table}>
        {lotteries.map((el) => (
          <ArchiveTable
            date={`${el.date}`}
            numbers={el.winneNumbers}
            myNumbers={el.myNumbers}
            win={el.price}
          />
        ))}
      </table>
    </section>
  );
};

export default Archive;
