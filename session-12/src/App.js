import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext/UserContext";
import { ThemeContextProvider } from "./context/ThemeContext/ThemeContext";

import { store } from "./store";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const CardDetails = lazy(() => import("./pages/CardDetails/CardDetails"));
const Home = lazy(() => import("./pages/Home/Home"));
const Error = lazy(() => import("./components/Error/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <Error />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: <Login />,
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
  <Provider store={store}>
    <ThemeContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeContextProvider>
  </Provider>
);
