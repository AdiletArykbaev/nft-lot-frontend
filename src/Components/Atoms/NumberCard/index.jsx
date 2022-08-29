import React from 'react';
import styles from './number.card.module.scss';

const NumberCard = ({number, type}) => {
    return (
        <div className={styles.box}>
            {type ? <p className={styles.number}>{number}</p> :
                <input className={styles.number} value={number} type="text"/>}
        </div>
    );
};

export default NumberCard;