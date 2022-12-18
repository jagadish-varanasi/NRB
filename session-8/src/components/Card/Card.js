import React, { Component } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    console.log("Child component constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Child component mount method");
  }

  componentWillUnmount() {
    console.log("Child component unmount method");
  }

  render() {
    console.log("Child component render method");
    return (
      <Link to={`/${this.props.member.login}`} className="link">
        <div className="card">
          <img
            src={this.props.member.avatar_url}
            alt="member"
            width="70px"
            height="70px"
          />
          <div>
            <div>{this.props.member.name ?? this.props.member.login}</div>
            <div>{this.props.member.location ?? "India"}</div>
            <div>{this.props.member.company ?? "Student"}</div>
            <div>{`Number of repos:${this.props.member.public_repos}`}</div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
