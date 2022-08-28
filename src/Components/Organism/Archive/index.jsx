import React from 'react';
import styles from './archive.module.scss';
import ArchiveTable from "../../Atoms/ArchiveTable";

const Archive = () => {

    const myNumbers = [1, 2, 3, 4, 5, 6];
    const numbers = [2, 6, 1, 4, 3, 5];

    const times = [1, 2, 3, 4, 5];

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>Архив лотереи</h2>
            <table className={styles.table}>
                {times && times.map(el => <ArchiveTable date={`${new Date()}`} numbers={numbers}
                                                        myNumbers={myNumbers} win={100}/>)}
            </table>
        </section>
    );
};

export default Archive;