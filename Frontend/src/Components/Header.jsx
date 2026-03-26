import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <header className="headermain">
        <div className="headermainsplit">
          <div className="salesbanner">
            <p className="m-0">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a href="#">ShopNow</a>
          </div>
          <select>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>
      </header>
    </>
  );
};

export default Header;
