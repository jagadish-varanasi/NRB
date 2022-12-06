import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import membersData from "./data/members.json";
import "./App.css";

const App = () => {
  const [members, setMembers] = useState(membersData);
  return (
    <Fragment>
      <Header />
      <div className="card-list">
        {members.map((member) => (
          <Card member={member} />
        ))}
      </div>
    </Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
