import React, { Fragment, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import CardDetails from "./components/CardDetails/CardDetails";
import ErrorComponent from "./components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/:id",
    element: <CardDetails />,
  },
]);

class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
