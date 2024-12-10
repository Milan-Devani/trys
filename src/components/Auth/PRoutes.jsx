import React from "react";
import { Navigate } from "react-router-dom";

const PRoutes = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PRoutes;