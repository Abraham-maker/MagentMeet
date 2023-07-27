import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { authenticate } from "../store/actions/auth";

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const savedToken = localStorage.getItem("userData");
  const transformedData = JSON.parse(savedToken);
  dispatch(authenticate(transformedData));

  if (!transformedData) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
