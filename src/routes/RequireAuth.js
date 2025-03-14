import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/landing" replace />;
};

export default RequireAuth;
