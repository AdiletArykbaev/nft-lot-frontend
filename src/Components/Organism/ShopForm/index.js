import React, {useState} from 'react';
import styles from './shopForm.module.scss';
import rezak from "../../../assets/icons/rezak.png";

const ShopForm = () => {
    const [count, setCount] = useState(1);

    const counterHandler = (bool) => {
        if (bool) {
            setCount((prev) => prev + 1)
        } else {
            setCount((prev) => prev > 1 ? prev - 1 : 1)
        }
    };

    return (
        <div className={styles.shopForm}>
            <img className={styles.rezak} src={rezak} alt="" />
            <h3 className={styles.title}>Данные получателя:</h3>
            <div className={styles.row}>
                <form className={styles.form}>
                    <div className={styles.first}>
                        <label>
                            <p>Фамилия<span>*</span></p>
                            <input type="text"/>
                        </label>
                        <label>
                            <p>Страна</p>
                            <div className={styles.search}>
                                <input type="text"/>
                            </div>
                        </label>
                        <label>
                            <p>Адрес</p>
                            <input type="text"/>
                        </label>
                        <label>
                            <p>Номер телефона</p>
                            <input type="text"/>
                        </label>
                        <label>
                            <p>E-Mail</p>
                            <input type="email"/>
                        </label>
                    </div>
                    <div className={styles.second}>
                        <label>
                            <p>Имя<span>*</span></p>
                            <input type="text"/>
                        </label>
                        <label>
                            <p>Город</p>
                            <div className={styles.search}>
                                <input type="text"/>
                            </div>
                        </label>
                        <label>
                            <p>Индекс</p>
                            <input type="text"/>
                        </label>
                        <label>
                            <p>Комментарий к заказу</p>
                            <textarea rows="6"/>
                        </label>
                    </div>
                </form>
                <div className={styles.info}>
                    <div className={styles.infoRow}>
                        <p className={styles.subtitle}>Количество:</p>
                        <div className={styles.dash}/>
                        <div className={styles.counter}>
                            <button onClick={() => counterHandler(false)}>
                                <svg width="20" height="2" viewBox="0 0 20 2" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 2C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0V2ZM1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V0ZM19 0H1V2H19V0Z"
                                        fill="white"/>
                                </svg>
                            </button>
                            <p>{count} шт.</p>
                            <button onClick={() => counterHandler(true)}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.5 1C11.5 0.447715 11.0523 0 10.5 0C9.94772 0 9.5 0.447715 9.5 1H11.5ZM9.5 20C9.5 20.5523 9.94772 21 10.5 21C11.0523 21 11.5 20.5523 11.5 20H9.5ZM20 11.5C20.5523 11.5 21 11.0523 21 10.5C21 9.94772 20.5523 9.5 20 9.5V11.5ZM1 9.5C0.447715 9.5 0 9.94771 0 10.5C0 11.0523 0.447715 11.5 1 11.5L1 9.5ZM9.5 1V20H11.5V1H9.5ZM20 9.5L1 9.5L1 11.5L20 11.5V9.5Z"
                                        fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={styles.infoRow}>
                        <p className={styles.subtitle}>Цена:</p>
                        <div className={styles.dash}/>
                        <p className={styles.price}>$80, 00</p>
                    </div>
                    <div className={styles.infoRow}>
                        <p className={styles.subtitle}>Цена в MMT:</p>
                        <div className={styles.dash}/>
                        <p className={styles.total}>2 000, 00</p>
                    </div>
                    <button className={styles.butBtn}>Купить</button>
                </div>
                <img className={styles.rezak2} src={rezak} alt="" />
            </div>
        </div>
    );
};

export default ShopForm;