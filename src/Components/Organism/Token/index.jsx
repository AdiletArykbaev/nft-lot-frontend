import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Pie} from "react-chartjs-2";
import styles from "./styles.module.scss";
import rezak from "../../../assets/icons/rezak.png";

ChartJS.register(ArcElement, Tooltip, Legend);

const Token = () => {
    const data = {
        labels: ["Пул ликвидности PancakeSwap", "Фонд Джекпота", "Маркетинг"],
        datasets: [
            {
                label: "# of Votes",
                data: [65, 33, 2],
                backgroundColor: ["#F77FBD", "#2C27FF", "#8BFF55"],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}> ТОКЕНОМИКА</h1>
            <div className={styles.charBox} style={{display: "flex", justifyContent: "center"}}>
                <div className={styles.char}>
                    <Pie data={data}/>
                </div>
                <img className={styles.rezak2} src={rezak} alt=""/>
            </div>
            <img className={styles.rezak} src={rezak} alt=""/>
        </div>
    );
};

export default Token;
