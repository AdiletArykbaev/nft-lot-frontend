import React from "react";
import styles from "./styles.module.scss";

const Rectangle = ({ img, text }) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt="" />
      <h4>{text}</h4>
    </div>
  );
};

export default Rectangle;
