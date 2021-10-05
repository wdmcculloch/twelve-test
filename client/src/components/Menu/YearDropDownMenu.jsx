import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./YearDropDownMenu.module.css";

const YearDropDownMenu = ({ handleChange, start, end, range }) => {
  return (
    <div className={styles.yearContainer}>

      <div className={styles.start}>
        <label><h3>Start</h3></label>
        <select id="start"  onChange={handleChange}>
          {range.map((item, i) =>
            item > end ? (
              <option key={i} value={item} disabled>
                {item}
              </option>
            ) : (
              <option key={i} value={item}>
                {item}
              </option>
            )
          )}
        </select>
      </div>
      <div className={styles.end}>
        <label><h3>End</h3></label>
        <select id="end" onChange={handleChange}>
          {range.map((year, i) =>
            year < start ? (
              <option key={i} value={year} disabled>
                {year}
              </option>
            ) : (
              <option key={i} value={year}>
                {year}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
};

export default YearDropDownMenu;
