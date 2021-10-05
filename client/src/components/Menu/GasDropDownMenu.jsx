import React, { useState, useEffect } from "react";

import axios from "axios";

const GasDropDownMenu = ({ handleChange }) => {
  const [gasNames, setGasNames] = useState([]);
  useEffect(() => {
    axios
      .get("/gasNames")
      .then((res) => {
        setGasNames(res.data);
      })
      .catch((err) => console.err(err.stack));
  }, []);

  return (
    <div>
      <label>Gas</label>
      <select onChange={handleChange} id='gas' >
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
