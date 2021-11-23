import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({gas, sector}) => {
  return <p className={styles.error}>{`No data for ${gas} emission data from the ${sector} sector`}</p>;
};

export default ErrorMessage;
