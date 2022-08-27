import React from 'react';
import styles from './media.link.module.scss';

const MediaLink = ({mediaData}) => {
    return (
        <>
            {mediaData && mediaData.map((el, idx) => (
                <div key={el.text + idx} className={styles.box}>
                    <img src={el.icon} alt="mediaLink"/>
                    <p className={styles.text}>{el.text}</p>
                </div>
            ))}
        </>
    );
};

export default MediaLink;