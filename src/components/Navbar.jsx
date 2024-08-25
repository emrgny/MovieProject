import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { GrLogin } from "react-icons/gr";
import { MdSearch } from "react-icons/md";
import Logo from "../assets/Logo.jpg";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="navbar">
      <div className="main">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="searchBar">
          <div className="seachIcon">
            <MdSearch style={{ fontSize: 40 }} />
          </div>
          <input type="text" placeholder="Film Ara" />
        </div>
        <div className="mainLink">
          <div className="navbarLinks">
            <Link to="/">Anasayfa</Link>
          </div>
          <div className="navbarLinks">
            <Link to="/menu">Menü</Link>
          </div>
          <div className="navbarLinks">
            <Link to="/about">Hakkımızda</Link>
          </div>
          <div>
            <div className="dropdown">
              <button onClick={toggleDropdown} className="dropbtn">
                Giriş
                <div style={{ marginLeft: 5, marginTop: 2 }}>
                  <GrLogin style={{ fontSize: 15 }} />
                </div>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/AdminLogin">Yönetici Giriş</Link>
                  <Link to="/UserLogin">User Giriş</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
