import React from "react";
import styles from "./Hero.module.scss";
import Container from "../UI/Container/Container";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.heroInner}>test</Container>
    </section>
  );
};

export default Hero;
