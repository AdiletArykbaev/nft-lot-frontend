import React from 'react';
import styles from './media.link.module.scss';

const MediaLink = ({mediaData}) => {
    return (
        <>
            <div className={styles.row}>
                {mediaData && mediaData.map((el) => (
                    <img src={el.icon} alt="mediaLink"/>
                ))}
            </div>
            <div className={styles.row}>
                {mediaData && mediaData.map((el) => (
                    <p className={styles.text}>{el.text}</p>
                ))}
            </div>
        </>
    );
};

export default MediaLink;