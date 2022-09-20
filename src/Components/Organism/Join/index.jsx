import React from 'react';
import styles from './join.module.scss';
import MediaLink from "../../Atoms/MediaLink";
import telegram from "../../../assets/icons/telegram.svg";
import twitter from "../../../assets/icons/twitter.svg";
import discord from "../../../assets/icons/discord.svg";
import reddit from "../../../assets/icons/reddit.svg";
import instagram from "../../../assets/icons/instagram.svg";
import tikTok from "../../../assets/icons/tikTok.svg";
import youTube from "../../../assets/icons/youTube.svg";
import rezak from "../../../assets/icons/rezakBig.png";
import {Max768, Min769} from "../../../Utils/MediaQuiries";

const Join = () => {

    const mediaLinks = [{icon: telegram, text: "Telegram", link: "https://t.me/marmosettokenGlobal"}, {
        icon: twitter,
        text: "Twitter",
        link: "https://twitter.com/marmosettoken/"
    },
        {icon: discord, text: "Discord", link: "https://discord.gg/cbzJVhbYDV"}, {
            icon: reddit,
            text: "Reddit",
            link: "https://www.reddit.com/r/marmosettoken_MMT/"
        }, {icon: instagram, text: "Instagram", link: "https://instagram.com/marmosettoken?igshid=YmMyMTA2M2Y="},
        {
            icon: tikTok,
            text: "TikTok",
            link: "https://www.tiktok.com/@marmosettoken?_t=8VBGdCz8Ln0&_r=1"
        }, {icon: youTube, text: "YouTube", link: "https://youtube.com/channel/UC0v-DgyatplMegkJ9zR3PpA"}];

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
                <Min769>
                    <div className={styles.mediaBox}>
                        <MediaLink mediaData={mediaLinks}/>
                    </div>
                </Min769>
            </div>
            <Max768>
                <div className={styles.mediaBox}>
                    <MediaLink mediaData={mediaLinks}/>
                </div>
            </Max768>
            <img className={styles.rezak} src={rezak} alt=""/>
            <img className={styles.rezak2} src={rezak} alt=""/>
        </div>
    );
};

export default Join;