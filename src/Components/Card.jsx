import React from "react";
import { Eyeicon, Hoticon, Rating } from "./Svgcom";
import { Link } from "react-router-dom";

const Card = ({
  item,
  itemIndex,
  offerhide,
  classname4,
  classname6,
  cardalign,
}) => {
  return (
    <>
      <Link key={itemIndex} className={cardalign} to={`/products/${item?.id}`}>
        <div className="imgpath">
          {item?.offer ? (
            <div className={offerhide}>
              <p>{item?.offer}</p>
            </div>
          ) : (
            ""
          )}
          <div className="hoticon">
            <Hoticon />
          </div>
          <div className="eyeicon">
            <Eyeicon />
          </div>
          <img className="imgurl" src={item?.image} alt="console"></img>
          <button className="addbtn">Add To Cart</button>
        </div>
        <div className="title">{item?.title}</div>
        <div className={classname4}>
          <p>
            ${item?.price}
            <del className={classname6}>{item?.currentprice}</del>
          </p>
        </div>
        <p className="title">{item?.category}</p>
        <div className="color-options" key={itemIndex}>
          {Array.from({ length: 5 }).map((_, index) => {
            let active = index + 1 <= item?.rating?.rate;
            return (
              <Rating
                key={index}
                fillcolor={active ? "#FFAD33" : "#0000003b"}
              />
            );
          })}
          <span className="title">{`(${item?.rating?.count})`}</span>
        </div>
        <div className="color-optionsfull">
          {item?.color?.map((color, index) => {
            return (
              <input
                key={index}
                type="radio"
                name={`color-${itemIndex}`}
                value={color}
                defaultChecked={index === 0}
                style={{ backgroundColor: color }}
              />
            );
          })}
        </div>
      </Link>
    </>
  );
};

export default Card;
