import React from "react";
import Galka from '../../../assets/icons/galka.png';
import styles from "./styles.module.scss";

const AboutToken = () => {
    return (
        <div className={styles.wrapperBox}>
            <div className={styles.wrapper}>
                <div className={styles.fisrtPart}>
                    <h1 className={styles.title}>
                        Сертификация безопасности и охраны труда
                    </h1>
                    <p className={styles.text}>
                        Проект Мармозеттокен предназначен для сообщества (у команды нет{" "}
                        токена) и полностью безопасен, потому что мы провели аудит проекта{" "}
                        ведущей аудиторской компанией ContractChecker.
                    </p>
                </div>
                <div className={styles.secondPart}>
                    <p className={styles.item}>
                        <img src={Galka} alt=""/>
                        АУДИТ
                    </p>
                    <p className={styles.item}>
                        <img src={Galka} alt=""/>
                        0% НАЛОГА НА ПРОДАЖУ/ПОКУПКУ
                    </p>
                    <p className={styles.item}>
                        <img src={Galka} alt=""/>
                        НЕТ КОНТРОЛЯ КОНТРАКТА
                    </p>
                    <p className={styles.item}>
                        <img src={Galka} alt=""/>
                        НЕТ РАННЕЙ ПРОДАЖИ ТОКЕНОВ
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutToken;
