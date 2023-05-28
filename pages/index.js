import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Barlow_Semi_Condensed } from "next/font/google";
// import styles from "/styles/Home.module.css";
import Header from "@/Components/Header";
import Main from "@/Components/Main";
import RuleContainer from "@/Components/RuleContainer";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Home() {
  const [showRules, setShowRules] = useState(false);
  return (
    <>
      <Head>
        <title>Frontend Mentor - Rock, Papers, Scissors Game</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {!showRules && <Header />} */}
      <Header showRules={showRules} />
      <Main showRules={showRules} setShowRules={setShowRules} />
      {showRules && (
        <section className={barlow.className}>
          <RuleContainer showRules={showRules} setShowRules={setShowRules} />
        </section>
      )}
    </>
  );
}
