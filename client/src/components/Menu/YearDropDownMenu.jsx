import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./YearDropDownMenu.module.css";

// const generateRange = (start, end) => {
//   let range = [];
//   for (let i = start; i <= end; i++) {
//     range.push(i);
//   }
//   return range;
// };

const YearDropDownMenu = ({ handleChange, start, end, range }) => {
  // const [range, setRange] = useState(generateRange(start, end));

  return (
    <div>
      <div>
        <label>Start Date</label>
        <select id="start" onChange={handleChange}>
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
      <div>
        <label>End Date</label>
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
