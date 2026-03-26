import React from "react";

const Features = ({ item }) => {
  return (
    <>
      <div className="gridalign">
        {item.map((product, index) => (
          <div key={product.id} className={`item${index + 1}`}>
            <img
              src={product.image}
              alt={product.title}
              className={`card-img${index + 1}`}
            />
            <div className={`carddetail${index + 1}`}>
              <p className="titelcard">{product.title}</p>
              <p className="description">{product.description}</p>
              <a href={product.link}>{product.linkname}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
