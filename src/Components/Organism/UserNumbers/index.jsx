import React from "react";
import styles from "./styles.module.scss";

const UserNumbers = () => {
  return (
    <div>
      <div className={styles.top}>
        <p className={styles.text}>Мой выбор:</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.actions}>
          <button className={styles.buyBtn}>Купить билет $10</button>
          <button className={styles.transparentBtn}>Запомнить мой выбор</button>
          <button className={styles.transparentBtn}>
            Сгенерировать все доступные
          </button>
        </div>
        <button className={styles.resetBtn}>Сбросить</button>
      </div>
    </div>
  );
};

export default UserNumbers;
