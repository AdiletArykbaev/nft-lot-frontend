import React from "react";
import styles from "./styles.module.scss";
import bscScan from '../../../assets/icons/bscscan.svg';
import cake from '../../../assets/icons/cakeLogo.svg';
import coingecko from '../../../assets/icons/coinGecko.svg';
import cmc from '../../../assets/icons/cmc.svg';
import aW from '../../../assets/icons/aW.svg';
import aAdex from '../../../assets/icons/aAdex.svg';
import InfoIcons from "../../Atoms/InfoIcons";

const Info = () => {

    const infoIcons = [bscScan, cake, coingecko, cmc, aW, aAdex];

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <InfoIcons data={infoIcons}/>
            </div>
        </div>
    );
};

export default Info;
