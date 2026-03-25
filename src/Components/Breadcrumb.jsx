import React from "react";
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
  console.log(segments);
  return (
    <div>
      <Link to="/">Home</Link>
      {segments.map((segment, index) => {
        if (!isNaN(segment)) return null;
        const path = "/" + segments.slice(0, index + 1).join("/");
        const islast = segments.length - 1;
        const name =
          routeNames[segment] ||
          segment.charAt(0).toUpperCase() + segment.slice(1);
        return (
          <span key={path}>
            {">"}
            {islast ? { segment } : <Link to={path}>{name}</Link>}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
