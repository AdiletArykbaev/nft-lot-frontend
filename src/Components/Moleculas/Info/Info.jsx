import React from "react";
import styles from "./styles.module.scss";
import image1 from "../../../assets/images/img-1.png";
import image2 from "../../../assets/images/img-2.png";

import image3 from "../../../assets/images/img-3.png";
import image4 from "../../../assets/images/img-4.png";
import image5 from "../../../assets/images/img-5.png";

const Info = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
        <div>
          <img src={image5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
