import React from "react";
import Button from "./Button";
import '../styles/notfound.css'
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
    <div className="notfound-main">
    <div className="content-notfound" >
      <div>
      <p className="notfound-title">404 Not Found</p>
      <p className="notfound-content">Your visited page not found. You may go home page.</p>
      </div>
      </div>
      <Link className="viewbtn-link" to='/'>Back to home page</Link>
      </div>
    </>
  );
};

export default Notfound;
