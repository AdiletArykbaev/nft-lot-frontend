import React from 'react';
import styles from './community.module.scss';
import Address from "../../Atoms/Address";

const Community = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>СООБЩЕСТВО</h2>
            <div className={styles.donate}>
                <p className={styles.text}>Если вы хотите пожертвовать на развитие, отправьте BNB, BUSD, USDT, MMT
                    здесь </p>
                <Address address={"w34235243899854"} inputId={"copyAddress"}/>
                <p className={styles.thanks}>Cпасибо вам за вашу поддержку!</p>
            </div>
        </div>
    );
};

export default Community;