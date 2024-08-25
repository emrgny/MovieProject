import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { GrLogin } from "react-icons/gr";

import Logo from "../assets/Logo.jpg";
import SearchBar from "./SearchBar";

function Navbar({}) {
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
        <SearchBar />
        <div className="mainLink">
          <div className="navbarLinks">
            <Link to="/">Anasayfa</Link>
          </div>
          <div className="navbarLinks">
            <Link to="/LatestMovies">En son çıkan filmler</Link>
          </div>
          <div className="navbarLinks">
            <Link to="/MostWatched">En çok izlenen filmler</Link>
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
                  <Link to="/UserRegister">Üye Ol</Link>
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
