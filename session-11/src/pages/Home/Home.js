import React, { Fragment, useState, useRef } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import SelectBox from "../../components/SelectBox/SelectBox";
import { useUserContext } from "../../context/UserContext/UserContext";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import Loader from "../../components/common/Loader";
import NoData from "../../components/common/NoData";

const Home = () => {
  const { theme } = useThemeContext();
  const { data, loading, searchText } = useUserContext();

  console.log(data);

  return (
    <div
      className={
        theme == "dark" ? "min-h-[100vh] bg-gray-600" : "min-h-[100vh] bg-white"
      }
    >
      <Header />
      <SelectBox />
      <div className="mt-6 flex flex-wrap gap-2.5 justify-center">
        {loading && <Loader />}
        {!loading && !data.length && <NoData />}
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
