import React from "react";
import styles from "./styles.module.scss";
import logo from "../../../assets/icons/logo.png";
import {NavLink as Link} from "react-router-dom";
import WalletBtn from "../../Atoms/WalletBtn";
import personIcon from "../../../assets/icons/user.svg";

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className="wrapper">
                <div className={styles.content}>
                    <div className={styles.logoBlock}>
                        <div>
                            <img src={logo} alt="logo"/>
                        </div>
                        <h1>
                            MARMOSET <br/> TOKEN
                        </h1>
                    </div>
                    <nav className={styles.navigation}>
                        <Link
                            to="/"
                            className={({isActive}) =>
                                isActive ? styles.active : styles.link
                            }
                        >
                            Home
                        </Link>
                        <Link
                            className={({isActive}) =>
                                isActive ? styles.active : styles.link
                            }
                            to="/us"
                        >
                            About us
                        </Link>
                        <Link
                            className={({isActive}) =>
                                isActive ? styles.active : styles.link
                            }
                            to="/lottery"
                        >
                            Lottery
                        </Link>
                        <Link
                            className={({isActive}) =>
                                isActive ? styles.active : styles.link
                            }
                            to="/shop"
                        >
                            Shop MMT
                        </Link>
                        <Link
                            className={({isActive}) =>
                                isActive ? styles.active : styles.link
                            }
                            to="/paper"
                        >
                            White Paper
                        </Link>
                        <Link
                            className={({isActive}) =>
                                isActive ? styles.active : styles.link
                            }
                            to="/faq"
                        >
                            FAQ
                        </Link>
                    </nav>
                    <div className={styles.btns}>
                        <img src={personIcon} alt="image icon"/>
                        <WalletBtn balance={"0.000"}/>
                        <li className={styles.changeLang}>RU</li>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
