import React from "react";
import styles from "/styles/Main.module.css";

const ChooseWeapon = () => {
  return (
    <div className={styles.chooseWrapper}>
      <div className={styles.chooseWeapon}>
        <div className={styles.gameBackground}>
          <img src="./images/icon-paper.svg" alt="paper" />
        </div>
      </div>
      <div className={styles.chooseWeapon}>
        <div className={styles.gameBackground}>
          <img src="./images/icon-scissors.svg" alt="scissors" />
        </div>
      </div>
      <div className={styles.chooseWeapon}>
        <div className={styles.gameBackground}>
          <img src="./images/icon-rock.svg" alt="rock" />
        </div>
      </div>
    </div>
  );
};

export default ChooseWeapon;
