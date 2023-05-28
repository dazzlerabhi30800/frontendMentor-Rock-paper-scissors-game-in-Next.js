import React from "react";
import { Barlow_Semi_Condensed } from "next/font/google";
import styles from "/styles/Main.module.css";
import ChooseWeapon from "./ChooseWeapon";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const Main = () => {
  return (
    <main className={`${styles.main} ${barlow.className}`}>
      <ChooseWeapon />
    </main>
  );
};

export default Main;
