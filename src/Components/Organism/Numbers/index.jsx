import React, { useEffect } from "react";
import styles from "./numbers.module.scss";
import NumberCard from "../../Atoms/NumberCard";
import { useSelector, useDispatch } from "react-redux";
import { connectToSmart } from "../../../Web3/interact";
import LotteryAbi from "../../../Contracts/Lottery.json";
import { formatArray } from "../../../Utils/FormatArray";
import { changeWinnerNumberAction } from "../../../Store/actions/LotteryPageActions";
import UserNumbers from "../UserNumbers/index";

const Numbers = () => {
  const numbers = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const { myNumbers, winnerNumbers, index } = useSelector(
    (state) => state.lotteryInfo
  );
  const { signer } = useSelector((state) => state.walletInfo);

  const getLotteryData = async (index) => {
    const contract = await connectToSmart(
      "0xdf66FC941600712af65D345A268c25a2888dA044",
      LotteryAbi,
      signer
    );
    const lotteryNumber = await contract.showWonNumber(index);
    // changeWinnerNumberAction()
    // dispatch(changeIndexAction(res));
    console.log("lottery number", lotteryNumber);
    const formatted = formatArray(lotteryNumber);
    console.log("formatted", formatted);
    dispatch(changeWinnerNumberAction(formatted));
    return lotteryNumber;
  };
  useEffect(() => {
    getLotteryData(index);
  }, [index]);
  return (
    <section className={styles.wrapper}>
      <div className={styles.numbers}>
        <div className={styles.top}>
          <p className={styles.text}>Выпавшие номера:</p>
          <a className={styles.link} href={"www.binance.com"}>
            www.binance.com
          </a>
        </div>
        <div className={styles.box}>
          {winnerNumbers.map((el) => (
            <NumberCard type={true} number={el} />
          ))}
        </div>
        <p className={styles.time}>
          Следующая цифра будет известна через: <span>1:43 сек.</span>
        </p>
      </div>
      <UserNumbers/>
    </section>
  );
};

export default Numbers;
