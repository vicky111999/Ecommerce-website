import React from "react";

const Tittlecard = ({ items, title, rightcomponent, date}) => {
  return (
    <>
      <div className="tittlecard1">
        <div className="target">
            <p className="bar2 ">{items}</p>
          <p className="saletype">{title}</p>
        </div>
          <div className="datetime">
           {date}
          </div>
          <div className="arrow">
           {rightcomponent}
          </div>
      </div>
    </>
  );
};

export default Tittlecard;
