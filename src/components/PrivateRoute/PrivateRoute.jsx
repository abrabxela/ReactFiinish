import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.user.accessToken);
  if (token) {
    return children;
  }
  return <Navigate to={"/auth/login"} />;
};

export default PrivateRoute;
