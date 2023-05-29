import React, { useState } from "react";
import { Barlow_Semi_Condensed } from "next/font/google";
import styles from "/styles/Main.module.css";
import ChooseWeapon from "./ChooseWeapon";
import GameStart from "./GameStart";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const Main = ({ showRules, setShowRules, setScore, score }) => {
  const [action, setAction] = useState();
  const [gameStart, setGameStart] = useState(false);
  const [computerChoice, setComputerChoice] = useState(null);
  const [win, setWin] = useState(null);
  return (
    <>
      <main className={`${styles.main} ${barlow.className}`}>
        {!gameStart && (
          <ChooseWeapon
            setGameStart={setGameStart}
            setAction={setAction}
            setComputerChoice={setComputerChoice}
            setScore={setScore}
            setWin={setWin}
            score={score}
          />
        )}
        {gameStart && (
          <GameStart
            setAction={setAction}
            setGameStart={setGameStart}
            gameStart={gameStart}
            action={action}
            computerChoice={computerChoice}
            setComputerChoice={setComputerChoice}
            win={win}
            setWin={setWin}
          />
        )}
        <button
          disabled={showRules}
          onClick={() => setShowRules((prevState) => (prevState = true))}
          className={styles.ruleButton}
        >
          rules
        </button>
      </main>
    </>
  );
};

export default Main;
