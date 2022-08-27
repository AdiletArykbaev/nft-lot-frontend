import React from 'react';
import styles from './address.module.scss';

const Address = ({address, inputId}) => {

    const copyAddressHandler = () => {
        document.getElementById(inputId).select();
        document.execCommand("copy");
    };

    return (
        <div className={styles.address}>
            <input type="text" id={inputId} value={address} readOnly={true}/>
            <button onClick={copyAddressHandler}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 17.5H5C4.46957 17.5 3.96086 17.2893 3.58579 16.9142C3.21071 16.5391 3 16.0304 3 15.5V5.5C3 4.96957 3.21071 4.46086 3.58579 4.08579C3.96086 3.71071 4.46957 3.5 5 3.5H15C15.5304 3.5 16.0391 3.71071 16.4142 4.08579C16.7893 4.46086 17 4.96957 17 5.5V7.5"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M19.895 7.5H8.105C7.49472 7.5 7 7.99472 7 8.605V20.395C7 21.0053 7.49472 21.5 8.105 21.5H19.895C20.5053 21.5 21 21.0053 21 20.395V8.605C21 7.99472 20.5053 7.5 19.895 7.5Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Скопировать
            </button>
        </div>
    );
};

export default Address;