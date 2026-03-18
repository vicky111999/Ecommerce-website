import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout";

const Protectedroute = ({children}) => {
  const user = localStorage.getItem('user');
  return (
    
      user ? children: <Navigate to="/login" replace/>
    
  );
};

export default Protectedroute;
