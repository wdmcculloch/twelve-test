import React, { useState, useEffect } from "react";
import axios from "axios";

const SectorDropDownMenu = ({handleChange}) => {
  const [sectorNames, setSectorNames] = useState([]);

  useEffect(() => {
    axios
      .get("/sectorNames")
      .then((res) => setSectorNames(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <label>Sector</label>
      <select onChange={handleChange} id='sector'>
        {sectorNames.map((item, i) => (
          <option key={i}  value={item} >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SectorDropDownMenu;
