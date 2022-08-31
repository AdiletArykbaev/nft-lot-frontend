import React from "react";
import styles from "./styles.module.scss";
import timeMonkey from "../../../assets/icons/timeMonkey.png";
import telegram from "../../../assets/icons/telegram.png";
import pancake from "../../../assets/icons/pancake.svg";
import rezak from "../../../assets/icons/rezak.png";
import Info from "../../Moleculas/Info/Info";
import MediaLink from "../../Atoms/MediaLink";

const Intro = () => {

    const mediaLinks = [{icon: telegram, text: "Telegram"}, {icon: pancake, text: "PancakeSwap"}];

    return (
        <div className={styles.wrapper}>
            <div className="wrapper">
                <div className={styles.content}>
                    <div className={styles.fisrtPart}>
                        <h1 className={styles.title}>
                            МАРМОЗЕТКА ДЕЦЕНТРАЛИЗОВАННЫЙ <br/> МЕМ-ТОКЕН ДЛЯ ПОКЛОННИКОВ{" "}
                            <br/>
                            СООБЩЕСТВА МЕМОВ
                        </h1>
                        <p className={styles.text}>
                            Мармозетка хочет создать новое веселое сообщество, чтобы <br/>
                            распространять информацию о удивительной, самой маленькой в мире
                            <br/>
                            обезьянке и добраться до макушки CoinMarketCap. <br/>
                        </p>
                        <p>
                            Ты скучал по Шибе, Доги, Флоки? Все в порядке! Мармозетка даст Вам{" "}
                            <br/>
                            еще один шанс!
                        </p>
                        <div className={styles.mediaBox}>
                            <MediaLink mediaData={mediaLinks}/>
                        </div>
                    </div>
                    <div className={styles.seconPart}>
                        <img src={timeMonkey} alt=""/>
                    </div>
                    <img className={styles.rezak} src={rezak} alt=""/>
                </div>
            </div>
            <Info/>
        </div>
    );
};

export default Intro;
