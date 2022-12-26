import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext/UserContext";
import { ThemeContextProvider } from "./context/ThemeContext/ThemeContext";
import Home from "./pages/Home/Home";
import "./App.css";

const Error = lazy(() => import("./components/Error/Error"));
const CardDetails = lazy(() => import("./pages/CardDetails/CardDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <Error />
      </Suspense>
    ),
  },
  {
    path: "/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CardDetails />
      </Suspense>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </ThemeContextProvider>
);
