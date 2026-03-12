import React from "react";

const Gadgets = ({ items }) => {
  return (
    <>
      <div className="cards">
        {items?.map((item) => {
          return (
            <div key={item?.id}>
              <div className="cardsdiv">
                <div className="imgcate"><img src={item?.img}></img></div>
                <div className="titlecard"><p>{item?.title}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gadgets;
