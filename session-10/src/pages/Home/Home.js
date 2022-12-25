import React, { Fragment, useState, useRef } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import SelectBox from "../../components/SelectBox/SelectBox";
import "./Home.css";
import { useUserContext } from "../../context/UserContext/UserContext";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";

const Home = () => {
  const { theme } = useThemeContext();
  const { data, loading, searchText } = useUserContext();

  console.log(data);

  return (
    <div className={theme == "dark" ? "dark" : "light"}>
      <Header />
      <SelectBox />
      <div className="card-list">
        {loading && <div>Loading...</div>}
        {!loading &&
          data
            ?.filter((member) => {
              if (searchText === "") return member;
              else if (
                (member.name ?? member.login)
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              ) {
                return member;
              }
            })
            .map((member) => <Card key={member.login} member={member} />)}
      </div>
    </div>
  );
};

export default Home;
