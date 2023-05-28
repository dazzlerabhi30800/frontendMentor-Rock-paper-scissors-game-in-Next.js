import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "/styles/Main.module.css";

const RuleContainer = ({ showRules, setShowRules }) => {
  return (
    <>
      <style jsx>
        {`
          .rule-container {
            scale: ${showRules ? 1 : 0};
            opacity: ${showRules ? 1 : 0};
            z-index: ${showRules ? 1 : -1};
          }
        `}
      </style>
      <div className={`${styles.ruleContainer} rule-container`}>
        <h2>Rules</h2>
        <button onClick={() => setShowRules(false)}>
          <FaTimes />
        </button>
        <img src="/images/image-rules.svg" alt="rules" />
      </div>
    </>
  );
};

export default RuleContainer;
