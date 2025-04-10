import React from 'react';
import './Header.css';
import DateRangePickerComp from "../Daterangepicker/Daterangepicker";
import { GoGraph } from "react-icons/go";
import { FaToggleOn } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header'>
      <p className='title'>Quick Commerce</p>
      <div className='right-section'>
        <button className='toggle-button'>
          <GoGraph className='icon' />
          <FaToggleOn className='icon' />
        </button>
        <DateRangePickerComp />
      </div>
    </div>
  );
}

export default Header;
