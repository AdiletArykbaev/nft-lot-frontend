import React from "react";
import logo from "../../../assets/icons/logo.png";
import styles from "./styles.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className="wrapper">
        <div className={styles.content}>
          <div className={styles.intro}>
            <img src={logo} alt="" />
            <h1 className={styles.title}>О МАРМОЗЕТКЕ</h1>
          </div>
          <div className={styles.textTable}>
            <p>
              Это новый революционный токен в сети Binance Smart Chain (BSC),
              который сочетает в себе все их лучшие функции для создания
              совершенно нового Мем токена в криптопространстве.
            </p>
            <p>
              Все владельцы Мармозетки смогут принимать еженедельное участие в
              первой и уникальной в своём роде Лотерее, с децентрализованным
              алгоритмом и бесконечно растущим ДЖЕКПОТОМ. С такими качествами
              токена, как подвижность и шустрость – в мыслях и действиях, Вам
              больше никогда не придется опаздывать на вечеринку.
            </p>
            <p>
              Так что сядьте поудобнее, расслабьтесь и зарабатывайте, пока
              Мармозетка прыгает по спинам собак, взбираясь на макушку
              CoinMarketCap.
            </p>
          </div>
          <h4 className={styles.text}>
            И наконец, каждый из Вас может использовать тотем Мармозетки в
            <br />
            качестве дополнительного домашнего талисмана, если хочет:
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
