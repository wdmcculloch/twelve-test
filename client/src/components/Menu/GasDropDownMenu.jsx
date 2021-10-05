import React, { useState, useEffect } from "react";
import styles from './GasDropDownMenu.module.css';

import axios from "axios";

const GasDropDownMenu = ({ handleChange }) => {
  const [gasNames, setGasNames] = useState([]);
  useEffect(() => {
    axios
      .get("/gasNames")
      .then((res) => {
        setGasNames(res.data);
      })
      .catch((err) => console.error(err.stack));
  }, []);

  return (
    <div className={styles.gas}>
      <label><h3>Gas</h3></label>
      <select className={styles.select} onChange={handleChange} id='gas' >
        {gasNames.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GasDropDownMenu;
