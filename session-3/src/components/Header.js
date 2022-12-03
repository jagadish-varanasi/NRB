import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" width="40px" height="40px" />
      <input placeholder="Search"></input>
      <img src={profile} alt="logo" width="40px" height="40px" />
    </div>
  );
}

export default Header;
