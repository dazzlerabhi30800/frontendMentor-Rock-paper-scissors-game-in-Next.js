import React from "react";
import { Barlow_Semi_Condensed } from "next/font/google";
import styles from "/styles/Home.module.css";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const Header = ({ score }) => {
  return (
    <header className={`${styles.header} ${barlow.className}`}>
      <h1 className={`${styles.heading}`}>
        Rock
        <br />
        Paper
        <br />
        Scissors
      </h1>
      <p className={styles.score}>
        Score <span>{score}</span>
      </p>
    </header>
  );
};

export default Header;
