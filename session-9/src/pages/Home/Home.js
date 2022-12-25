import React, { Fragment, useState, useRef } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import SelectBox from "../../components/SelectBox/SelectBox";
import useGitHubMembersByCity from "../../components/../hooks/useGithubMembersByCity";
import "./Home.css";

const Home = () => {
  const ref = useRef();
  const [searchText, setSearchText] = useState("");

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const { data, loading } = useGitHubMembersByCity(selectedCity);

  console.log(data);

  const handleSearchText = () => {
    setSearchText(ref.current.value);
  };

  return (
    <Fragment>
      <Header reference={ref} handleSearchText={handleSearchText} />
      <SelectBox
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
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
    </Fragment>
  );
};

export default Home;
