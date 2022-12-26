import React, { Fragment, useState, useRef } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import SelectBox from "../../components/SelectBox/SelectBox";
import "./Home.css";
import { useUserContext } from "../../context/UserContext/UserContext";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import NoData from "../../components/NoData/NoData";

const Home = () => {
  const { theme } = useThemeContext();
  const { data, loading, searchText } = useUserContext();

  const filteredMembers = data?.filter((member) => {
    if (searchText === "") return member;
    else if (
      (member.name ?? member.login)
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    ) {
      return member;
    }
  });

  return (
    <div className={theme == "dark" ? "dark" : "light"}>
      <Header />
      <SelectBox />
      <div className="card-list">
        {loading ? (
          <Loader />
        ) : !data?.length ? (
          <NoData />
        ) : filteredMembers.length ? (
          filteredMembers.map((member) => (
            <Card key={member.login} member={member} />
          ))
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Home;
