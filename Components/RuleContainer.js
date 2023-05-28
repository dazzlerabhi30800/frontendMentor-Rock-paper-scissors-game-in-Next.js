import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "/styles/Main.module.css";

const RuleContainer = ({ setShowRules }) => {
  return (
    <div className={styles.ruleContainer}>
      <h2>Rules</h2>
      <button onClick={() => setShowRules(false)}>
        <FaTimes />
      </button>
      <img src="/images/image-rules.svg" alt="rules" />
    </div>
  );
};

export default RuleContainer;
