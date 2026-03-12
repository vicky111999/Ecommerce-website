import React from "react";
import { Eyeicon, Hoticon, Rating } from "./Svgcom";
import Card from "./Card";
import SingleCard from "../pages/SingleCard";

const ProductList = ({
  items,
  offerhide,
  classname4,
  flexbo,
  classname6,
  cardalign,
}) => {
  return (
    <>
      <div
        className="card"
        style={{
          flexWrap: flexbo ? "wrap" : "nowrap",
        }}
      >
        {items?.map((item, itemIndex) => {
          return (
            <Card
              key={itemIndex}
              item={item}
              itemIndex={itemIndex}
              classname4={classname4}
              classname6={classname6}
              offerhide={offerhide}
              cardalign={cardalign}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
