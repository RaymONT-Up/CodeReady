import React from "react";
import styles from "./Container.module.scss";

const Container = ({ className, children }) => {
  const classes = className
    ? `${styles.container} ${className}`
    : styles.container;

  return <div className={classes}>{children}</div>;
};

export default Container;
