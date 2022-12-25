import React from "react";
import "./Card.css";

const Card = ({ member: { login, avatar_url, html_url } }) => {
  return (
    <div className="card">
      <img src={avatar_url} alt="member" width="70px" height="70px" />
      <div>
        <div>{login}</div>
        <a href={html_url}>Github link</a>
      </div>
    </div>
  );
};

export default Card;
