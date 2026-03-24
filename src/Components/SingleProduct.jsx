import React, { useState } from "react";
import "../styles/singleproduct.css";
import { Rating } from "./Svgcom";
const SingleProduct = ({ item }) => {
  const [imagechange, setImagechange] = useState(item?.images?.img1);

  return (
    <>
      <main>
        <div className="singleproduct-main">
          <div className="singleproduct-img">
            <div className="singleproductsecond-img">
              <img
                src={item?.images?.img1}
                alt="gaming"
                onClick={() => setImagechange(item?.images?.img1)}
              ></img>
              <img
                src={item?.images?.img2}
                alt="gaming"
                onClick={() => setImagechange(item?.images?.img2)}
              ></img>
              <img
                src={item?.images?.img3}
                alt="gaming"
                onClick={() => setImagechange(item?.images?.img3)}
              ></img>
              <img
                src={item?.images?.img4}
                alt="gaming"
                onClick={() => setImagechange(item?.images?.img4)}
              ></img>
            </div>
            <div className="singleproductmain-img">
              <img src={imagechange} alt="gaming"></img>
            </div>
          </div>
          <div className="singleproduct-content">
            <div>
              <p className="single-title mb-1">{item?.title}</p>
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <Rating
                    key={index}
                    fillcolor={
                      index + 1 <= item?.rating?.rate ? "#FFAD33" : "#0000003b"
                    }
                  />
                );
              })}
              <span className="single-count">
                ({item?.rating?.count}Reviews){" "}
              </span>
              <span
                style={{
                  color:
                    item?.rating?.stocks === "in Stock" ? "#00FF66" : "red",
                }}
                className="single-stocks"
              >
                {item?.rating?.stocks}
              </span>
              <p className="single-price mt-1">${item?.price}</p>
              <p className="single-content mt-1">{item?.content}</p>
              <div className="single-colors">
                <span className="single-colorspace"> Colours:</span>
                {item?.colors?.map((color, index) => {
                  return (
                    <input
                      key={index}
                      type="radio"
                      name="color"
                      value={color}
                      defaultChecked={index === 0}
                      style={{ accentColor: color }}
                    />
                  );
                })}
              </div>
              <div>
                <span className="single-colorspace">Size:</span>
                {item?.size?.map((size) => {
                  return (
                    <div>
                      <span className="single-size">{size}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleProduct;
