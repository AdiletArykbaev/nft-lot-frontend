import React from 'react';
import styles from './shop.module.scss';
import Gif from '../../assets/gif/MainVideo.mp4';
import ShopForm from "../../Components/Organism/ShopForm";
import rezak from "../../assets/icons/rezak.png";

const Shop = () => {
    return (
        <div className={styles.shop}>
            <div className={styles.video}>
                <video loop={true} muted={true} controls={false} autoPlay={true}>
                    <source src={Gif} type="video/mp4"/>
                </video>
            </div>
            <div className={styles.box}>
                <p className={styles.description}>Тотем мармозетка - символизирует мудрость, храбрость, ловкость и
                    самоотверженность, обладает
                    чувственностью, даром находить и получать удовольствия, а так же талантом быстро ориентироваться в
                    ситуации и умением использовать в свою пользу. Отличается подвижностью и шустростью – в мыслях и
                    действиях, идеально подходит в качестве отличного оберега от зла. Настраиваясь на тотем Мармозетка,
                    вы можете попросить ее усилить стороны вашей личности и развить их.
                    <br/><br/>
                    Во многих странах мира обладает статусом священного животного, может стать прекрасным талисманом,
                    оберегом, тотемом для Вас и ваших близких!
                    <br/><br/>
                    С помощью токенов ММТ вы можете приобрести домашний тотем указав в форме данные для доставки
                    посылки. Стоимость 99$ (по курсу токена ММТ) + бесплатная доставка по всему миру.
                </p>
                <ShopForm/>
            </div>
            <img className={styles.rezak} src={rezak} alt="" />
        </div>
    );
};

export default Shop;