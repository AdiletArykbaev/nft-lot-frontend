import React from 'react';
import styles from './join.module.scss';
import MediaLink from "../../Atoms/MediaLink";
import telegram from "../../../assets/icons/telegram.png";
import discord from "../../../assets/icons/discord.png";
import rezak from "../../../assets/icons/rezakBig.png";

const Join = () => {

    const mediaLinks = [{icon: telegram, text: "Telegram"}, {icon: discord, text: "Discord"}];

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleBox}>
                <h2 className={styles.title}>ПРИСОЕДИНЯЙТЕСЬ К НАШЕМУ СООБЩЕСТВУ</h2>
            </div>
            <div className={styles.content}>
                <p className={styles.text + " " + styles.textFirst}>Активное сообщество, которое любит нашу маленькую
                    Мармозетку!</p>
                <p className={styles.text}>Наш telegram и discord заполнен участниками сообщества 24/7, которые с
                    удовольствием помогут Вам. Не доверяйте случайным сообщениям людей, называющих себя “службой
                    поддержки”, и никогда никому не передавайте информацию о вашем кошельке.</p>
                <div className={styles.mediaBox}>
                    <MediaLink mediaData={mediaLinks}/>
                </div>
            </div>
            <img className={styles.rezak} src={rezak} alt=""/>
            <img className={styles.rezak2} src={rezak} alt=""/>
        </div>
    );
};

export default Join;