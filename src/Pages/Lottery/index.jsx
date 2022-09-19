import React, {useEffect, useState} from "react";
import Banner from "../../Components/Organism/Banner";
import Numbers from "../../Components/Organism/Numbers";
import Archive from "../../Components/Organism/Archive";
import {useDispatch, useSelector} from "react-redux";
import {connectToSmart} from "../../Web3/interact";
import {formatArray} from "../../Utils/FormatArray";
import {formatDate} from "../../Utils/FormatDate";
import LotteryAbi from "../../Contracts/Lottery.json";
import {changeDataActionCreator} from "../../Store/actions/LotteryPageActions";
import Rules from "../../Components/Organism/Rules";
import styles from './lottery.module.scss';

const Lottery = () => {
    const [modal, setModal] = useState(false);

    const {index} = useSelector((state) => state.lotteryInfo);
    const {signer, address} = useSelector((state) => state.walletInfo);
    const dispatch = useDispatch();

    const getLotteryData = async (lottery, index) => {
        const lotteryNumber = await lottery.showLotteryInfo(
            address,
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

    const showModalHandler = (bool) => {
        setModal(bool)
    };

    return (
        <div className={styles.lottery}>
            {modal && <Rules onChange={showModalHandler}/>}
            <Banner onChange={showModalHandler}/>
            <Numbers/>
            <Archive index/>
        </div>
    );
};

export default Lottery;
