import React from "react";
import { Barlow_Semi_Condensed } from "next/font/google";
import styles from "/styles/Main.module.css";
import ChooseWeapon from "./ChooseWeapon";
import RuleContainer from "./RuleContainer";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const Main = ({ showRules, setShowRules }) => {
  console.log(showRules);
  return (
    <>
      <main className={`${styles.main} ${barlow.className}`}>
        <ChooseWeapon />
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
