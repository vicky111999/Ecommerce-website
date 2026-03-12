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
                  <p className="title1">{items?.title}</p>
                </div>
                <div>
                  <p className="content">{items?.content}</p>
                </div>
              </div>
              <div className="aligncircle">
                <div className="circle">
                  <p className="hours">
                    {timer?.h}
                  
                      <p className="hoursname">{items.hourname}</p>
                   
                  </p>
                </div >
                <div className="circle">
                  <p className="days">
                    {timer?.d}
                    <div>
                      <p className="daysname">{items.daysname}</p>
                    </div>
                  </p>
                </div>
                <div className="circle">
                  <p className="minutes">
                    {timer?.m}
                    <div>
                      <p className="minutesname">{items.minutesname}</p>
                    </div>
                  </p>
                </div>
                <div className="circle">
                  <p className="seconds">
                    {timer?.s}
                    <div>
                      <p className="secondsname">{items.secondsname}</p>
                    </div>
                  </p>
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
