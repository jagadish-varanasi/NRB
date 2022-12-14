import React, { Fragment, useState, useEffect, useRef } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import membersGitHubUserNames from "../../data/members.json";

function Home() {
  const ref = useRef();
  const [members, setMembers] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchMemberDetails = async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    return await response.json();
  };

  const fetchMembersDetails = async () => {
    const data = await Promise.all(
      membersGitHubUserNames.map(({ userName }) => fetchMemberDetails(userName))
    );
    console.log(data);
    setMembers(data);
  };

  useEffect(() => {
    fetchMembersDetails();
  }, []);

  const handleSearchText = () => {
    setSearchText(ref.current.value);
  };

  return (
    <Fragment>
      <Header reference={ref} handleSearchText={handleSearchText} />
      <div className="card-list">
        {members
          .filter((member) => {
            if (searchText === "") return member;
            else if (
              (member.name ?? member.login)
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
            ) {
              return member;
            }
          })
          .map((member) => (
            <Card key={member.id} member={member} />
          ))}
      </div>
    </Fragment>
  );
}

export default Home;
