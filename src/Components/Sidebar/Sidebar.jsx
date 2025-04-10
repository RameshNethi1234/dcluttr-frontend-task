import React, { useState } from 'react';
import './Sidebar.css';
import { RiExpandUpDownLine } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { FaTv } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="sidebar">
      <div className="top-section">
        <button className='main-logo-container'>
          <p className='main-logo-text'>SS</p>
          <p>Test_brand</p>
          <RiExpandUpDownLine />
        </button>

        <ul>
          <li><AiTwotoneHome /> Overview</li>

          <li onClick={toggleDropdown} className='dropdown-item'>
            <FaTv /> Channels <FaChevronDown />
          </li>

          {showDropdown && (
            <ul className='dropdown-menu'>
              <li>Meta Ads</li>
              <li>Google Ads</li>
              <li>Quick Commerce</li>
            </ul>
          )}

          <li><CiImageOn /> Creatives</li>
        </ul>
      </div>

      <ul className='bottom-logos'>
        <li><FiHelpCircle />Help</li>
        <li><IoSettingsOutline />Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
