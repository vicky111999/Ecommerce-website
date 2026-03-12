import React from "react";
import "../styles/buttonbtn.css";
const Button = ({item, classname, classname1}) => {
  return (
    <>
    <div className={classname1}><button className={classname}>{item}</button></div>
    </>
  );
};

export default Button;
