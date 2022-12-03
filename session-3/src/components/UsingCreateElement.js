import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root-createEle"));

const heading = React.createElement("div", { id: "title" }, [
  React.createElement("h1", {}, "Using createElement"),
  React.createElement("h1", {}, "React"),
  React.createElement("h1", {}, "Node"),
]);

root.render(heading);
