import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { hasLoggedin } = useSelector((state) => state.login);

  if (!hasLoggedin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
