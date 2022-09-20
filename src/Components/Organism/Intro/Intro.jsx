import React from "react";
import styles from "./styles.module.scss";
import timeMonkey from "../../../assets/icons/homeIcon.svg";
import telegram from "../../../assets/icons/telegram.svg";
import pancake from "../../../assets/icons/pancake1.svg";
import rezak from "../../../assets/icons/rezak.png";
import Info from "../../Moleculas/Info/Info";
import MediaLink from "../../Atoms/MediaLink";
import {Max768, Min769} from "../../../Utils/MediaQuiries";

const Intro = () => {
    const mediaLinks = [
        {icon: telegram, text: "Telegram", link: "https://t.me/marmosettokenGlobal"},
        {icon: pancake, text: "PancakeSwap", link: "#"},
    ];

    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <Min769>
                    <div className={styles.content}>
                        <div className={styles.fisrtPart}>
                            <h1 className={styles.title}>
                                МАРМОЗЕТКА ДЕЦЕНТРАЛИЗОВАННЫЙ МЕМ-ТОКЕН ДЛЯ ПОКЛОННИКОВ СООБЩЕСТВА МЕМОВ
                            </h1>
                            <p className={styles.text}>
                                Мармозетка хочет создать новое веселое сообщество, чтобы
                                распространять информацию о удивительной, самой маленькой в мире
                                обезьянке и добраться до макушки CoinMarketCap.
                            </p>
                            <p className={styles.text}>
                                Ты скучал по Шибе, Доги, Флоки? Все в порядке! Мармозетка даст Вам
                                еще один шанс!
                            </p>
                            <div className={styles.mediaBox}>
                                <MediaLink mediaData={mediaLinks}/>
                            </div>
                        </div>
                        <div className={styles.secondPart}>
                            <img src={timeMonkey} alt=""/>
                        </div>
                        <img className={styles.rezak} src={rezak} alt=""/>
                    </div>
                </Min769>
                <Max768>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            МАРМОЗЕТКА ДЕЦЕНТРАЛИЗОВАННЫЙ МЕМ-ТОКЕН ДЛЯ ПОКЛОННИКОВ СООБЩЕСТВА МЕМОВ
                        </h1>
                        <div className={styles.secondPart}>
                            <img src={timeMonkey} alt=""/>
                            <img className={styles.rezak} src={rezak} alt=""/>
                            <img className={styles.rezak2} src={rezak} alt=""/>
                        </div>
                        <p className={styles.text + ' ' + styles.firstText}>
                            Мармозетка хочет создать новое веселое сообщество, чтобы
                            распространять информацию о удивительной, самой маленькой в мире
                            обезьянке и добраться до макушки CoinMarketCap.
                        </p>
                        <p className={styles.text + ' ' + styles.secondText}>
                            Ты скучал по Шибе, Доги, Флоки? Все в порядке! Мармозетка даст Вам
                            еще один шанс!
                        </p>
                    </div>
                </Max768>
            </div>
            <Info/>
        </div>
    );
};

export default Intro;
