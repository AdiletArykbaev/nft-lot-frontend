import React from 'react';
import styles from './rulesStep.module.scss';

const RulesStep = ({step}) => {
    return (
        <div className={styles.box}>
            <p className={styles.step}>{step.number}</p>
            <p className={styles.text}>{step.text}</p>

            {step?.list
            && <ul className={styles.list}>
                {
                    step.list.map((el) => (
                        <li className={styles.item}>
                            {el.first}
                            <p>{el.number}</p>
                            {el.second}
                        </li>
                    ))
                }
            </ul>
            }
            {step?.description
            && <p className={styles.description}>
                {step.description.first}
                <br/><br/>
                {step.description.second}
                <br/><br/>
                {step.description.third}
            </p>
            }
        </div>
    );
};

export default RulesStep;