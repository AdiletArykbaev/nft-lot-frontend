import React, {useRef, useState} from 'react';
import styles from './admin.module.scss';

const Admin = () => {
    const [file, setFile] = useState('');
    const fileRef = useRef();
    const fileHandler = () => {
        fileRef.current.click()
    };
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Admin</h1>
            <form>
                <input onChange={(e) => setFile(e.target.files[0].name)} ref={fileRef} hidden={true} type="file"/>
                <div>
                    <button className={styles.choose} type={"button"} onClick={fileHandler}>Choose File</button>
                    <p>{file ? file : 'No Files'}</p>
                </div>
                <button className={styles.submit} type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default Admin;