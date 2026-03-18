import React from "react";
import Productcrud from "../Components/Productcrud";

const Updateproduct = () => {
  return (
    <>
    <main>
    <h1>Update Product</h1>
      <Productcrud  event= "update"  />
      </main>
    </>
  );
};

export default Updateproduct;
