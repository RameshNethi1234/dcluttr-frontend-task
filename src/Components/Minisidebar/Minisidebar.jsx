import React from "react";
import './Minisidebar.css';
import { FaPlus } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";

const MiniSideBar = () => {
    return (
        <div className="sidebar-main-logo">
            <button>
                <img src = 'https://cdn.shopify.com/s/files/1/0587/1036/0271/articles/Perfora_Logo_File.png?v=1664439728' alt = "perforalogo" className = "logo"/>
            </button>
        <div className = "sidebar-logos">
            <ul>
                <li>   
                <button>
                    <img src = "https://tse1.mm.bing.net/th?id=OIP.Hhr0eZQu3QOPfd6zkIJquwHaFj&pid=Api&P=0&h=180" alt = "mamaearthlogo" className="logo"/>
                </button>
                </li>
                <li>   
                <button>
                    <img src = 'https://tse3.mm.bing.net/th?id=OIP.oC9EA7cfcuRHOwD6XRImLgAAAA&pid=Api&P=0&h=180 ' alt = "boatlogo" className = "logo"/>
                </button>
                </li>
                <li>   
                <button>
                    <FaPlus className = "logo" alt = "plus_button"/>
                </button>
                </li>
            </ul>
            <ul className="bottom-logos">
                    <li><button className="dark-logo"><SlPeople /></button></li>
                    <li><button className="dark-logo SS">SS</button></li>
                </ul>
        </div>
        </div>
    )
}

export default MiniSideBar;