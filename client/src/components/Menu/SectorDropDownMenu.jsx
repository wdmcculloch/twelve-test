import React, { useState, useEffect } from "react";
import axios from "axios";
import { serverConfig } from "../../../../config/config.js";
import styles from './SectorDropDownMenu.module.css'

const SectorDropDownMenu = ({ sector, handleChange }) => {
  const [sectorNames, setSectorNames] = useState([]);

  useEffect(() => {
    axios
      .get(`${serverConfig.url}/sectorNames`)
      .then((res) => setSectorNames(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.sector}>
      <label>
        <h3>Sector</h3>
      </label>
      <select onChange={handleChange} id="sector" value={sector}>
        {sectorNames.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SectorDropDownMenu;
