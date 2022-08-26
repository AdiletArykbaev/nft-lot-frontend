import React from "react";
import styles from "./styles.module.scss";
import Slider from "../../Atoms/Slider";

const Nfts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1>ТВОРЧЕСТВО ММТ</h1>
        <p>
          Мы гордимся тем, что поддерживаем изобретательность во всех ее
          проявлениях. Чтобы создать что-то замечательное и уникальное,
          воплотить в жизнь свое вдохновение. Это просто еще один способ
          побудить других выйти за рамки предвзятых ограничений и правил и
          испытать, что значит быть частью нашего децентрализованного движения.
        </p>
      </div>
      <div className={styles.content}>
        <Slider />
      </div>
    </div>
  );
};

export default Nfts;
