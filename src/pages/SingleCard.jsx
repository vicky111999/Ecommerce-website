import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const SingleCard = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const api = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  useEffect(() => {
    fetch(`${api}/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok)   throw new Error(`HTTP ERROR Status!: ${response.status} `);
        
        return response.json();
      })
      // .then((res) => res.json() )
      .then((json) =>
        setTimeout(() => {
          setData(json);
        }, 5000),
      )
      .catch((err) => setError(err));
  }, [api, id]);
  // console.log(data);
  return (
    <>
      {error ? (
        <div
          className="errorthrow"
          dangerouslySetInnerHTML={{ __html: error }}
        />
      ) : data ? (
        <Card
          item={data}
          classname4={"price"}
          classname5={"rating"}
          offerhide={"offer"}
          cardalign={"singlecard"}
        />
      ) : (
        <p className="loader">loading..</p>
      )}
    </>
  );
};

export default SingleCard;
