import React from "react";
import styles from "./styles.module.scss";
import { changeMyNumberAction } from "../../../Store/actions/LotteryPageActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { connectToSmart } from "../../../Web3/interact";
import LotteryAbi from "../../../Contracts/Lottery.json"
import TokenAbi from "../../../Contracts/token.json"
import bigInt from "big-integer";


const UserNumbers = () => {
  const dispatch = useDispatch()
  const { myNumbers } = useSelector((state) => state.lotteryInfo)
  const { signer } = useSelector((state) => state.walletInfo)
  useEffect(() => {
    console.log("мои номера изменились", myNumbers)
  }, [myNumbers])
  async function getTicket(numbers) {
    const lottery = await connectToSmart(
      "0xdf66FC941600712af65D345A268c25a2888dA044",
      LotteryAbi,
      signer
    );
    const token = await connectToSmart(
      "0xeFd5fa314D80310cb9600eDd21CB71f513F5E4F2",
      TokenAbi,
      signer
    )
    let value = bigInt(2 ** 256 - 1);
    console.log(await token.approve("0xdf66FC941600712af65D345A268c25a2888dA044", value))
    const res = await lottery.buyTicket(numbers)
    console.log(res)
  }
  return (
    <div>
      <div className={styles.top}>
        <p className={styles.text}>Мой выбор:</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <input defaultValue={myNumbers[0]} type="text" />
        </div>
        <div className={styles.box}>
          <input defaultValue={myNumbers[1]} type="text" />
        </div>
        <div className={styles.box}>
          <input defaultValue={myNumbers[2]} type="text" />
        </div>
        <div className={styles.box}>
          <input defaultValue={myNumbers[3]} type="text" />
        </div>
        <div className={styles.box}>
          <input defaultValue={myNumbers[4]} type="text" />
        </div>
        <div className={styles.box}>
          <input defaultValue={myNumbers[5]} type="text" />
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.actions}>
          <button onClick={() => {
            let data = Array.from(document.querySelectorAll('input'), v => +v.value);
            data.pop()
            console.log("data in array", data)
            dispatch(changeMyNumberAction(data))
            getTicket(data)
          }} className={styles.buyBtn}>Купить билет $10</button>
          <button className={styles.transparentBtn}>Запомнить мой выбор</button>
          <button className={styles.transparentBtn}>
            Сгенерировать все доступные
          </button>
        </div>
        <button onClick={() => {
          dispatch(changeMyNumberAction([0, 0, 0, 0, 0, 0]))
        }} className={styles.resetBtn}>Сбросить</button>
      </div>
    </div >
  );
};

export default UserNumbers;
