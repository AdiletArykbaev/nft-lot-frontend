import React from 'react';
import styles from './numbers.module.scss';
import NumberCard from "../../Atoms/NumberCard";

const Numbers = () => {

    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <section className={styles.wrapper}>
            <div className={styles.numbers}>
                <div className={styles.top}>
                    <p className={styles.text}>Выпавшие номера:</p>
                    <a className={styles.link} href={"www.binance.com"}>www.binance.com</a>
                </div>
                <div className={styles.box}>
                    {arr.map(el => <NumberCard type={true} number={el}/>)}
                </div>
                <p className={styles.time}>Следующая цифра будет известна через: <span>1:43 сек.</span></p>
            </div>
            <div>
                <div className={styles.top}>
                    <p className={styles.text}>Мой выбор:</p>
                </div>
                <div className={styles.box}>
                    {arr.map(el => <NumberCard number={el}/>)}
                </div>
                <div className={styles.buttons}>
                    <div className={styles.actions}>
                        <button className={styles.buyBtn}>Купить билет $10</button>
                        <button className={styles.transparentBtn}>Запомнить мой выбор</button>
                        <button className={styles.transparentBtn}>Сгенерировать все доступные</button>
                    </div>
                    <button className={styles.resetBtn}>Сбросить</button>
                </div>
            </div>
        </section>
    );
};

export default Numbers;