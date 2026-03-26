import React from "react";
import { Navigate} from "react-router-dom";

const Protectedroute = ({children}) => {
  const user = localStorage.getItem('user');
  return (
    
      user ? children: <Navigate to="/login" replace/>
    
  );
};

export default Protectedroute;
