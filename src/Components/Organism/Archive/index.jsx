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
  const numbers = [2, 6, 1, 4, 3, 5];
  const dispatch = useDispatch();
  //   const { winnerNumbers, myNumbers, date } = useSelector(
  //     (state) => state.lotteryInfo
  //   );
  const { signer, balance, address } = useSelector((state) => state.walletInfo);

  async function call() {
    const lottery = await connectToSmart(
      "0x15aC2c60F90D2Cd0966297fDbA971DDF7FBB042e",
      LotteryAbi,
      signer
    );
    console.log("lottery smart", lottery);
    const archive = await lottery.functions.showLotteryInfo(
      "0xdf66FC941600712af65D345A268c25a2888dA044",
      2
    );
    console.log("archive", archive);
    const res = {
      winnerNumbers: formatArray(archive[0]),
      myNumbers: formatArray(archive[1]),
      date: formatDate(parseInt(archive[2]._hex, 16)),
    };
    console.log("res object", res);
    // dispatch(
    //   changeDataActionCreator(res.winnerNumbers, res.myNumbers, res.date)
    // );
    console.log(res);
    console.log("archive", archive);
  }
  useEffect(() => {
    console.log("use effect worked");
    call();
    // console.log(archive);
  }, [balance]);
  const times = [1, 2, 3, 4, 5];
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Архив лотереи</h2>
      <table className={styles.table}>
        {times &&
          times.map((el) => (
            <ArchiveTable
              date={`${new Date()}`}
              numbers={numbers}
              myNumbers={numbers}
              win={100}
            />
          ))}
      </table>
    </section>
  );
};

export default Archive;
