import React from "react";
import "./Card.css";
import profile from "../../assets/profile.png";

const Card = ({
  member: {
    name,
    location,
    company,
    login,
    avatar_url,
    public_repos,
  },
}) => {
  return (
    <div className="card">
      <img src={avatar_url} alt="member" width="70px" height="70px" />
      <div>
        <div>{name ?? login}</div>
        <div>{location ?? "India"}</div>
        <div>{company ?? "Student"}</div>
        <div>{`Number of repos:${public_repos}`}</div>
      </div>
    </div>
  );
};

export default Card;
