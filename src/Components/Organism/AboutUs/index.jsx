import React from "react";
import logo from "../../../assets/icons/logo.png";
import styles from "./styles.module.scss";
import Rectangle from "../../Atoms/Rectangle";
import msg from "../../../assets/icons/msg.svg";

const AboutUs = () => {
    const infoBlock = [
        {
            img: msg,
            text: "быстрее и проще раскрепощаться в отношениях",
        },
        {img: msg, text: "стать живее и артистичнее"},
        {img: msg, text: "научиться легкости  и переключаемости"},
        {img: msg, text: "не упускать подходящие шансы"},
    ];
    return (
        <div className={styles.content}>
            <div className={styles.intro}>
                <img src={logo} alt=""/>
                <h1 className={styles.title}>О МАРМОЗЕТКЕ</h1>
            </div>
            <div className={styles.textTable}>
                <p>
                    Это новый революционный токен в сети Binance Smart Chain (BSC),
                    который сочетает в себе все их лучшие функции для создания
                    совершенно нового Мем токена в криптопространстве.
                </p>
                <p className={styles.p}>
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
                <br/>
                качестве дополнительного домашнего талисмана, если хочет:
            </h4>
            <div className={styles.walletsBlock}>
                {infoBlock.map((item) => (
                    <Rectangle img={item.img} text={item.text}/>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
