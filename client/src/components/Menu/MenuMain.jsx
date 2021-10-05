import React, { useState, useEffect } from "react";
import GasDropDownMenu from "./GasDropDownMenu.jsx";
import SectorDropDownMenu from "./SectorDropDownMenu.jsx";
import YearDropDownMenu from "./YearDropDownMenu.jsx";

const MenuMain = ({start, end, range, handleChange, handleSubmit}) => {
  return (
    <div>
      <GasDropDownMenu handleChange={handleChange}/>
      <SectorDropDownMenu handleChange={handleChange}/>
      <YearDropDownMenu handleChange={handleChange} start={start} end={end} range={range}/>
      <button onClick={handleSubmit} >Submit</button>
    </div>
  );
};

export default MenuMain;
