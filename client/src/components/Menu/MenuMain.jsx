import React, { useState, useEffect } from "react";
import GasDropDownMenu from "./GasDropDownMenu.jsx";
import SectorDropDownMenu from "./SectorDropDownMenu.jsx";
import YearDropDownMenu from "./YearDropDownMenu.jsx";
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
      <motion.button whileHover={{ scale: 1.02}} whileTap={{scale: 0.95}}onClick={handleSubmit}>
        <h3>SUBMIT</h3>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="-6 -7.5 44 44"
        >
          <path
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"
            fill="#343434"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default MenuMain;
