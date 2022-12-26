import React, { useRef, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { useUserContext } from "../../context/UserContext/UserContext";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";

function Header() {
  const { theme, setTheme } = useThemeContext();
  const { reference, handleSearchText } = useUserContext();

  const isLight = theme === "light";

  const themeButton = isLight ? "Dark" : "Light";

  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  return (
    <div className={isLight ? "header-light" : "header-dark"}>
      <img src={logo} alt="logo" width="40px" height="40px" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchText();
        }}
      >
        <input placeholder="Search" ref={reference} />
        <button type="submit">Search</button>
      </form>
      <div className="right-panel">
        <button onClick={toggleTheme}>{themeButton}</button>
        <img src={profile} alt="logo" width="40px" height="40px" />
      </div>
    </div>
  );
}

export default Header;
