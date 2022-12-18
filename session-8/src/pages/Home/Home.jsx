import React, { Fragment, useState, useEffect, useRef, Component } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import membersGitHubUserNames from "../../data/members.json";

class Home extends Component {
  constructor(props) {
    console.log("Parent component constructor");
    super(props);
    this.state = { members: [], searchText: "" };
  }

  fetchMemberDetails = async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    return await response.json();
  };

  fetchMembersDetails = async () => {
    const data = await Promise.all(
      membersGitHubUserNames.map(({ userName }) =>
        this.fetchMemberDetails(userName)
      )
    );
    this.setState({ members: data });
  };

  handleSearchText = (value) => {
    console.log(value);
    this.setState({ searchText: value });
  };

  componentDidMount() {
    console.log("Parent component mount method");
    this.fetchMembersDetails();
  }

  componentDidUpdate() {
    console.log("Parent component update method");
  }

  render() {
    console.log("Parent component render method");
    return (
      <Fragment>
        <Header handleSearchText={this.handleSearchText} />
        <div className="card-list">
          {this.state.members
            .filter((member) => {
              if (this.state.searchText === "") return member;
              else if (
                (member.name ?? member.login)
                  .toLocaleLowerCase()
                  .includes(this.state.searchText.toLocaleLowerCase())
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
}

export default Home;
