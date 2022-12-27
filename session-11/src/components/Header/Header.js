import React, { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { useUserContext } from "../../context/UserContext/UserContext";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import Button from "../common/Button";

function Header() {
  const { theme, setTheme } = useThemeContext();
  const { reference, handleSearchText } = useUserContext();

  const themeButton = theme == "light" ? "Dark" : "Light";

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div
      className={
        theme == "dark"
          ? "bg-gray-800 p-4 flex justify-between items-center"
          : "bg-gray-600 p-4 flex justify-between items-center"
      }
    >
      <img src={logo} alt="logo" width="40px" height="40px" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchText();
        }}
      >
        <input
          className="py-1.5 px-8 my-2 rounded-lg outline-none cursor-pointer"
          placeholder="Search"
          ref={reference}
        />
        <Button name="Search" type="submit" />
      </form>
      <div className="flex items-center gap-10">
        <Button name={themeButton} handleClick={toggleTheme} />
        <img src={profile} alt="logo" width="40px" height="40px" />
      </div>
    </div>
  );
}

export default Header;
