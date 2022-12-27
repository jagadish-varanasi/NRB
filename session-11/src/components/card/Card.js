import React from "react";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";

const Card = ({ member: { login, avatar_url, html_url } }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={
        theme == "dark"
          ? "min-w-[300px] bg-gray-300 p-8 flex items-center justify-center gap-8 m-2"
          : "min-w-[300px] bg-gray-300 p-8 flex items-center justify-center gap-8 m-2"
      }
    >
      <img src={avatar_url} alt="member" width="70px" height="70px" />
      <div>
        <div>{login}</div>
        <a href={html_url}>Github link</a>
      </div>
    </div>
  );
};

export default Card;
