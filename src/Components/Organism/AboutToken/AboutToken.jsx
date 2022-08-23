import React from "react";
import styles from "./styles.module.scss";

const AboutToken = () => {
  return (
    <div className="wrapper">
      <div className={styles.wrapper}>
        <div className={styles.fisrtPart}>
          <h1 className={styles.title}>
            Сертификация безопасности <br /> и охраны труда
          </h1>
          <p className={styles.text}>
            Проект Мармозеттокен предназначен для сообщества (у команды нет{" "}
            <br />
            токена) и полностью безопасен, потому что мы провели аудит проекта{" "}
            <br />
            ведущей аудиторской компанией ContractChecker. <br />
          </p>
        </div>
        <div className={styles.secondPart}>
          <ul className={styles.list}>
            <li className={styles.item}>АУДИТ</li>
            <li className={styles.item}>0% НАЛОГА НА ПРОДАЖУ/ПОКУПКУ</li>
            <li className={styles.item}>НЕТ КОНТРОЛЯ КОНТРАКТА</li>
            <li className={styles.item}> НЕТ РАННЕЙ ПРОДАЖИ ТОКЕНОВ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutToken;
