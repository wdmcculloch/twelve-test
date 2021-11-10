import React, { useState, useEffect } from "react";
import GasDropDownMenu from "../GasDropDown/GasDropDownMenu.jsx";
import SectorDropDownMenu from "../SectorDropDown/SectorDropDownMenu.jsx";
import YearDropDownMenu from "../YearDropDown/YearDropDownMenu.jsx";
import { motion } from "framer-motion";
import styles from "./MenuMain.module.css";

const MenuMain = ({ gas, sector, start, end, range, handleChange, handleSubmit }) => {
  return (
    <div className={styles.inputContainer}>
      <GasDropDownMenu handleChange={handleChange} gas={gas}/>
      <SectorDropDownMenu handleChange={handleChange} sector={sector}/>
      <YearDropDownMenu
        handleChange={handleChange}
        start={start}
        end={end}
        range={range}
      />
    </div>
  );
};

export default MenuMain;
