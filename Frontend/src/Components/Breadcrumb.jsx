import React from "react";
import '../styles/breadcrumb.css'
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const routeNames = {
    contact: "Contact",
    about: "About",
    addproduct: "Add Product",
    updateproduct: "Update Product",
    singleproduct: "Product",
    products: "Products",
  };
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumb-main">
      <Link to="/">Home</Link>
      {segments.map((segment, index) => {
        if (!isNaN(segment)) return null;
        const path = "/" + segments.slice(0, index + 1).join("/");
        const islast = index === segments.length - 1;
        console.log(islast)
        const name =
          routeNames[segment] ||
          segment.charAt(0).toUpperCase() + segment.slice(1);
        return (
          <span key={path}>
            <span className="breadcrumb">/</span>
            {islast ? (<span className="breadcrumb-name">{segment}</span>)   : <Link to={path}>{name}</Link>}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
