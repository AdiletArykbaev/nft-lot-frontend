import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import styles from "./styles.module.scss";
import rezak from "../../../assets/icons/rezak.png";
import graphic from '../../../assets/icons/graphic.svg';

ChartJS.register(ArcElement, Tooltip, Legend);

const Token = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}> ТОКЕНОМИКА</h1>
            <div className={styles.charBox} style={{display: "flex", justifyContent: "center"}}>
                <img className={styles.praphic} src={graphic} alt=""/>
                <img className={styles.rezak2} src={rezak} alt=""/>
            </div>
            <img className={styles.rezak} src={rezak} alt=""/>
        </div>
    );
};

export default Token;
