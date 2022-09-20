import React from "react";
import logo from "../../../assets/icons/logo.png";
import styles from "./styles.module.scss";
import Rectangle from "../../Atoms/Rectangle";
import msg from "../../../assets/icons/msg.svg";
import about2 from "../../../assets/icons/about2.svg";
import about3 from "../../../assets/icons/about3.svg";
import about4 from "../../../assets/icons/about4.svg";
import btcAbout1 from "../../../assets/icons/btcAbout1.svg";
import btcAbout2 from "../../../assets/icons/btcAbout2.svg";
import btcAbout3 from "../../../assets/icons/btcAbout3.svg";
import btcAbout4 from "../../../assets/icons/btcAbout4.svg";
import btcAbout5 from "../../../assets/icons/btcAbout5.svg";
import rezak from "../../../assets/icons/rezak.png";

const AboutUs = () => {
    const infoBlock = [
        {img: msg, text: "быстрее и проще раскрепощаться в отношениях",},
        {img: about2, text: "стать живее и артистичнее"},
        {img: about3, text: "научиться легкости  и переключаемости"},
        {img: about4, text: "не упускать подходящие шансы"},
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
                <img className={styles.btcPos1} src={btcAbout1} alt="btc"/>
                <img className={styles.btcPos2} src={btcAbout2} alt="btc"/>
                <img className={styles.btcPos3} src={btcAbout3} alt="btc"/>
                <img className={styles.btcPos4} src={btcAbout4} alt="btc"/>
                <img className={styles.btcPos5} src={btcAbout5} alt="btc"/>
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
                <img className={styles.rezak} src={rezak} alt=""/>
            </div>
        </div>
    );
};

export default AboutUs;
