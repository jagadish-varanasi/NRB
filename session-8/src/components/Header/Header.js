import React, { useRef, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

function Header({ handleSearchText }) {
  return (
    <div className="header">
      <img src={logo} alt="logo" width="40px" height="40px" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchText(e.target[0].value);
        }}
      >
        <input placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <img src={profile} alt="logo" width="40px" height="40px" />
    </div>
  );
}

export default Header;
