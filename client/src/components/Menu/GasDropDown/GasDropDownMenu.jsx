import React, { useState, useEffect } from "react";
import styles from "./GasDropDownMenu.module.css";
import serverConfig from "../../../../../config/serverConfig.js";
import axios from "axios";

const GasDropDownMenu = ({ gas, handleChange }) => {
  const [gasNames, setGasNames] = useState([]);
  useEffect(() => {
    axios
      .get(`${serverConfig.url}/gasNames`)
      .then((res) => {
        setGasNames(res.data);
      })
      .catch((err) => console.error(err.stack));
  }, []);

  return (
    <div className={styles.gas}>
      <label>
        <h3>Gas</h3>
      </label>
      <select
        role="list"
        className={styles.select}
        onChange={handleChange}
        id="gas"
        value={gas}
      >
        {gasNames.map((item, i) => (
          <option key={i} value={item} role="listitem">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GasDropDownMenu;
