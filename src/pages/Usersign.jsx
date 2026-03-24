import React from "react";
import coder from "../assets/signupimg.jpg";
import Signup from "../Components/Signup";
import Login2 from "../Components/Login2";
import { useLocation } from "react-router-dom";

const Usersign = () => {
  const location = useLocation();
  const Islogin = location.pathname === "/login";
  return (
    <>
      <div className="signupalign">
        <div className="img-responsive">
          <img src={coder} alt="Signup page" />
        </div>
        <div className="signupwhole">
          <div className="signuppage">{Islogin ? <Login2 /> : <Signup />}</div>
        </div>
      </div>
    </>
  );
};

export default Usersign;
