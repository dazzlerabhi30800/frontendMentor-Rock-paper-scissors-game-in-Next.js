import React from "react";
import styles from "/styles/Main.module.css";

const ChooseWeapon = ({
  setWin,
  setAction,
  setGameStart,
  setComputerChoice,
  setScore,
  score,
}) => {
  const computerAction = ["rock", "paper", "scissors"];
  function handleAction(playeraction) {
    setAction(playeraction);
    setGameStart(true);
    let choiceIndex = Math.floor(Math.random() * computerAction.length);
    let choice = computerAction[choiceIndex];
    let computerTimeout = setTimeout(() => {
      setComputerChoice(choice);
      let results = getResults(playeraction, choice);
      if (results === "YOU WIN") {
        setWin(results);
        setScore(score + 1);
      } else if (results === "YOU LOSE") {
        setWin(results);
        setScore(score > 0 ? score - 1 : 0);
      } else {
        setWin(results);
        setScore(score);
      }
    }, 3000);
    return () => clearTimeout(computerTimeout);
  }

  const getResults = (action, choice) => {
    if (action === "rock") {
      switch (choice) {
        case "paper":
          return "YOU LOSE";
        case "scissors":
          return "YOU WIN";
        default:
          return "IT IS DRAW";
      }
    } else if (action === "paper") {
      switch (choice) {
        case "rock":
          return "YOU WIN";
        case "scissors":
          return "YOU LOSE";
        default:
          return "IT IS DRAW";
      }
    } else {
      switch (choice) {
        case "rock":
          return "YOU LOSE";
        case "paper":
          return "YOU WIN";
        default:
          return "IT IS DRAW";
      }
    }
  };
  return (
    <div className={styles.chooseWrapper}>
      <div
        className={styles.chooseWeapon}
        onClick={() => handleAction("paper")}
      >
        <div className={styles.gameBackground}>
          <img src="./images/icon-paper.svg" alt="paper" />
        </div>
      </div>
      <div
        className={styles.chooseWeapon}
        onClick={() => handleAction("scissors")}
      >
        <div className={styles.gameBackground}>
          <img src="./images/icon-scissors.svg" alt="scissors" />
        </div>
      </div>
      <div className={styles.chooseWeapon} onClick={() => handleAction("rock")}>
        <div className={styles.gameBackground}>
          <img src="./images/icon-rock.svg" alt="rock" />
        </div>
      </div>
    </div>
  );
};

export default ChooseWeapon;
