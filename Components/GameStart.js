import React, { useRef } from "react";
import styles from "/styles/Main.module.css";

const GameStart = ({
  setAction,
  action,
  setGameStart,
  gameStart,
  computerChoice,
  setComputerChoice,
  win,
  setWin,
}) => {
  return (
    <>
      <style jsx>
        {`
          .rock {
            --shadow-color: hsl(349, 84%, 29%);
            background-image: var(--Rock-Gradient);
          }
          .paper {
            --shadow-color: hsl(230, 91%, 56%);
            background-image: var(--Paper-Gradient);
          }
        `}
      </style>
      <div className={styles.gameStart}>
        <div className={styles.resultWrapper}>
          <div
            className={`${styles.playerChose} ${styles.player1} ${
              action ? action : ""
            } ${win === "YOU WIN" ? styles.winner : ""}`}
          >
            <div className={styles.gameBackground}>
              <img src={`/images/icon-${action}.svg`} alt="player-1" />
            </div>
          </div>
          <span>you picked</span>
        </div>
        <div className={styles.gameStatus}>
          {win !== null ? <h3>{win}</h3> : <h3>Loding Results...</h3>}
          <button
            disabled={win === null}
            onClick={() => {
              setAction(null);
              setGameStart(false);
              setComputerChoice(null);
              setWin(null);
            }}
          >
            play again
          </button>
        </div>

        <div className={styles.resultWrapper}>
          {computerChoice ? (
            <div
              className={`${styles.playerChose} ${styles.computerPlayer} ${
                computerChoice ? computerChoice : ""
              } ${win === "YOU LOSE" ? styles.winner : ""}`}
            >
              <div className={styles.gameBackground}>
                <img
                  src={`/images/icon-${computerChoice}.svg`}
                  alt="player-1"
                />
              </div>
            </div>
          ) : (
            <div className={styles.computerSkeleton}></div>
          )}
          <span>the house picked</span>
        </div>
      </div>
    </>
  );
};

export default GameStart;
