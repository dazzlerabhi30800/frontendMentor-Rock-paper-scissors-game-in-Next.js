import React from "react";
import styles from "/styles/Main.module.css";

const GameStart = ({ playerImg }) => {
  return (
    <div className={styles.gameStart}>
      <div className={styles.resultWrapper}>
        <div className={`${styles.playerChose} ${styles.player1}`}>
          <div className={styles.gameBackground}>
            <img src="/images/icon-scissors.svg" alt="player-1" />
          </div>
        </div>
        <span>you picked</span>
      </div>
      <div className={styles.gameStatus}>
        <h3>You Win</h3>
        <button>play again</button>
      </div>
      <div className={styles.resultWrapper}>
        <div
          className={`${styles.playerChose} ${styles.computerPlayer} ${styles.winner}`}
        >
          <div className={styles.gameBackground}>
            <img src="/images/icon-paper.svg" alt="player-1" />
          </div>
        </div>
        <span>the house picked</span>
      </div>
    </div>
  );
};

export default GameStart;
