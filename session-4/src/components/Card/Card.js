import React from "react";
import "./Card.css";
import profile from "../../assets/profile.png";

const Card = ({ member: { name, designation, address, company } }) => {
  return (
    <div className="card">
      <img src={profile} alt="member" width="70px" height="70px" />
      <div>
        <div>{name}</div>
        <div>{designation}</div>
        <div>{address}</div>
        <div>{company}</div>
      </div>
    </div>
  );
};

export default Card;
