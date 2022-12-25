import React from "react";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import "./Card.css";

const Card = ({ member: { login, avatar_url, html_url } }) => {
  const { theme } = useThemeContext();
  return (
    <div className={theme == "dark" ? "card-dark" : "card-light"}>
      <img src={avatar_url} alt="member" width="70px" height="70px" />
      <div>
        <div>{login}</div>
        <a href={html_url}>Github link</a>
      </div>
    </div>
  );
};

export default Card;
