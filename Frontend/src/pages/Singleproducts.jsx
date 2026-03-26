import React, { useState } from "react";
import "../styles/singleproducts.css";
import SingleProduct from "../Components/SingleProduct";
import singledetail from "../assets/data/Singledetail.json";
import { Decreasebtnicon, Deliveryicon, Hoticon, Increasebtnicon, Returnproducticon } from "../Components/Svgcom";
import Button from "../Components/Button";
const Singleproducts = () => {
  const Quanty = () => {
    const [qty, setQty] = useState(1);
    const handlechange = (e) => {
      setQty(e.target.value);
    };
    const handledecrease = () => {
      if (qty > 1) setQty(qty - 1);
    };
    const handleincrease = () => {
      setQty(Number(qty) + 1);
    };
    return (
      <div className="single-qtycount">
        <button onClick={handledecrease}><Decreasebtnicon/></button>
        <input
        name='qty'
          type="number"
          min="1"
          value={qty}
          onChange={handlechange}
        ></input>
        <button onClick={handleincrease}><Increasebtnicon/></button>
      </div>
    );
  };
  return (
    <SingleProduct
      item={singledetail}
      counts={Quanty()}
      delivery={<Deliveryicon/>}
      retrundelivery={<Returnproducticon/>}
      buybtn={
        <Button
          item={"Buy Now"}
          classname={"viewbtn-single"}
          classname1={"alignbtn"}
        />
      }
      favourite={<Hoticon width={'45'} height={'45'}/>}
    />
  );
};

export default Singleproducts;
