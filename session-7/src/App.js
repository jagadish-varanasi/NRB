import React, { Fragment, useEffect, useState } from "react";
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

const App = () => {
  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
