import React from "react";
import Button from "./Button";

const Offerpanel = ({ items, classname, classname1,timer }) => {
  return (
    <>
      <div className="offerpanel">
        {items.map((items) => {
          return (
            <div key={items?.id}>
              <div className="main1">
                <div>
                  <p className="title1 m-0">{items?.title}</p>
                </div>
                <div>
                  <p className="content m-0">{items?.content}</p>
                </div>
              </div>
              <div className="aligncircle">
                <div className="circle">
                  <div className="hours">
                    {timer?.h}
                      <p className="hoursname m-0">{items.hourname}</p>
                  </div>
                </div >
                <div className="circle">
                  <div className="days">
                    {timer?.d}
                    <div>
                      <p className="daysname m-0">{items.daysname}</p>
                    </div>
                  </div>
                </div>
                <div className="circle">
                  <div className="minutes">
                    {timer?.m}
                    <div>
                      <p className="minutesname m-0">{items.minutesname}</p>
                    </div>
                  </div>
                </div>
                <div className="circle">
                  <div className="seconds">
                    {timer?.s}
                    <div>
                      <p className="secondsname m-0">{items.secondsname}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  item={items.btnname}
                  classname={classname}
                  classname1={classname1}
                />
              </div>
              <div className="offerimg">
                <img src={items?.img} alt="speaker"></img>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Offerpanel;
