import React from 'react';
import styles from './number.card.module.scss';

const NumberCard = ({number}) => {
    return (
        <div className={styles.box}>
            <p className={styles.number}>{number}</p>
        </div>
    );
};

export default NumberCard;