import React from "react";
import styles from "./styles.module.scss";
import Slider from "../../Atoms/Slider";
import rezak from "../../../assets/icons/rezak.png";

const Nfts = () => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <h1>ТВОРЧЕСТВО ММТ</h1>
                <p>
                    Мы гордимся тем, что поддерживаем изобретательность во всех ее
                    проявлениях. Чтобы создать что-то замечательное и уникальное,
                    воплотить в жизнь свое вдохновение. Это просто еще один способ
                    побудить других выйти за рамки предвзятых ограничений и правил и
                    испытать, что значит быть частью нашего децентрализованного движения.
                </p>
            </div>
            <Slider sliderData={arr}/>
            <p className={styles.subtitle}>Наше сообщество становится сильнее с каждым днем. Пожалуйста, следите за нашими социальными платформами,
                чтобы получать самую актуальную и точную информацию о MMT.</p>
            <img className={styles.rezak} src={rezak} alt=""/>
        </div>
    );
};

export default Nfts;
