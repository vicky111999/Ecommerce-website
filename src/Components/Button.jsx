import React from "react";
import "../styles/buttonbtn.css";
const Button = ({item, classname, classname1, onClick}) => {
  return (
    <>
    <div className={classname1}><button className={classname} onClick={onClick}>{item}</button></div>
    </>
  );
};

export default Button;
