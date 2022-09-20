import React from 'react';
import styles from './community.module.scss';
import Address from "../../Atoms/Address";
import rezak from "../../../assets/icons/rezak.png";

const Community = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>СООБЩЕСТВО</h2>
            <div className={styles.donate}>
                <p className={styles.text}>Если вы хотите пожертвовать на развитие, отправьте BNB, BUSD, USDT, MMT
                    здесь </p>
                <div className={styles.address}>
                    <Address address={"w34235243899854"} inputId={"copyAddress"}/>
                </div>
                <p className={styles.thanks}>Cпасибо вам за вашу поддержку!</p>
                <img className={styles.rezak} src={rezak} alt=""/>
            </div>
        </div>
    );
};

export default Community;