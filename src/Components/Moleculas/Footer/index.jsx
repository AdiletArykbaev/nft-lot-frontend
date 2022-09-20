import React, {useEffect, useState} from 'react';
import styles from "./footer.module.scss";
import Hand from '../../../assets/icons/hand.svg';
import Address from "../../Atoms/Address";
import {useLocation} from "react-router-dom";

const Footer = () => {

    const [status, setStatus] = useState(true);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes("admin")) {
            setStatus(false)
        } else {
            setStatus(true)
        }
    }, [location.pathname]);

    return (
        <footer>
            {status && <>
                <div className={styles.addressBox}>
                    <p className={styles.addressText}>BSC contract address:</p>
                    <Address address={"0x3B5328D38a795514E044081fcaa764013715C666"} inputId={"copyAddress2"}/>
                </div>
                <h3 className={styles.thank}>
                    СПАСИБО ЗА ВАШУ ПОДДЕРЖКУ!
                    <img src={Hand} alt="Hand"/>
                </h3>
            </>}
            <div className={styles.box}>
                <p className={styles.text}>© Авторское право Marmosettoken.com | Все права защищены</p>
            </div>
        </footer>
    );
};

export default Footer;