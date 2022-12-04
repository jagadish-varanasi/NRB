import React, { useRef, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import membersData from "../../data/members.json";

const searchFunction = (searchText) =>
  membersData.filter(
    (member) =>
      member.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase()) ||
      member.designation
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase()) ||
      member.company
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
  );

function Header({ setMembers }) {
  const search = useRef();
  return (
    <div className="header">
      <img src={logo} alt="logo" width="40px" height="40px" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredMembers = searchFunction(search.current.value);
          setMembers(filteredMembers);
        }}
      >
        <input placeholder="Search" ref={search} />
        <button type="submit">Search</button>
      </form>
      <img src={profile} alt="logo" width="40px" height="40px" />
    </div>
  );
}

export default Header;
