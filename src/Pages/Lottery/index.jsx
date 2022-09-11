import React, { useEffect } from "react";
import Banner from "../../Components/Organism/Banner";
import Numbers from "../../Components/Organism/Numbers";
import Archive from "../../Components/Organism/Archive";
import { useDispatch, useSelector } from "react-redux";
import { connectToSmart } from "../../Web3/interact";
import { formatArray } from "../../Utils/FormatArray";
import { formatDate } from "../../Utils/FormatDate";
import LotteryAbi from "../../Contracts/Lottery.json";
import { changeDataActionCreator } from "../../Store/actions/LotteryPageActions";

const Lottery = () => {
  const { index } = useSelector((state) => state.lotteryInfo);
  const { signer } = useSelector((state) => state.walletInfo);
  const dispatch = useDispatch();

  const getLotteryData = async (lottery, index) => {
    const lotteryNumber = await lottery.showLotteryInfo(
      "0x9f9855cf238b561dc68e424935f8e9c83f5d4357",
      index
    );
    const res = {
      winneNumbers: formatArray(lotteryNumber[0]),
      myNumbers: formatArray(lotteryNumber[1]),
      date: formatDate(lotteryNumber[2]),
      price: parseInt(lotteryNumber[3], 16),
    };
    // dispatch(changeIndexAction(res));

    return res;
  };
  useEffect(() => {
    async function call() {
      const res = [];
      const contract = await connectToSmart(
        "0xdf66FC941600712af65D345A268c25a2888dA044",
        LotteryAbi,
        signer
      );
      for (let i = index; i >= 1; i--) {
        const lotteryData = await getLotteryData(contract, i);
        res.push(lotteryData);
      }
      dispatch(changeDataActionCreator(res));
    }

    call();
  }, [index]);
  return (
    <div style={{ width: "90%", margin: "0 auto ", padding: "10% 0 0" }}>
      <Banner />
      <Numbers />
      <Archive index />
    </div>
  );
};

export default Lottery;
