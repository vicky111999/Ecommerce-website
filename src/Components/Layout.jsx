import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollButton from "./ScrollButton";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar/>
        <main>
          <Outlet />
        </main>
        <ScrollButton/>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
