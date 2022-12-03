import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import UsingJsx from "./components/UsingJsx";

const App = () => (
  <Fragment>
    <Header />
    <UsingJsx />
  </Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
