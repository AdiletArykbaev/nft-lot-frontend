import React from 'react';
import styles from "./footer.module.scss";
import Address from "../../Atoms/Address";

const Footer = () => {
    return (
        <footer>
            <div className={styles.addressBox}>
                <p className={styles.addressText}>BSC contract address:</p>
                <Address address={"0x3B5328D38a795514E044081fcaa764013715C666"} inputId={"copyAddress2"}/>
            </div>
            <div className={styles.box}>
                <p className={styles.text}>© Авторское право Marmosettoken.com | Все права защищены</p>
            </div>
        </footer>
    );
};

export default Footer;