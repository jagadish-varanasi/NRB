import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import membersData from "./data/members.json";
import "./App.css";

const App = () => {
  const [members, setMembers] = useState(membersData);

  return (
    <Fragment>
      <Header setMembers={setMembers} />
      <div className="card-list">
        {members.map((member) => (
          <Card key={member.id} member={member} />
        ))}
      </div>
    </Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
