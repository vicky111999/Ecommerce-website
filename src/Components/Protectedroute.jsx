import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout";

const Protectedroute = () => {
  const user = localStorage.getItem('user')
  console.log("hi");
  console.log(user);
  return (
    
      user ? <Layout /> : <Navigate to="/login"/>
    
  );
};

export default Protectedroute;
