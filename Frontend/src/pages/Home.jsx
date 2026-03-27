import React, { useEffect, useState } from "react";
import "../styles/home.css";
import "../styles/product.css";
import "../styles/tittlecard1.css";
import Button from "../Components/Button.jsx";
import Slideshow from "../Components/Slideshow.jsx";
import Banner from "../assets/data/Banner.json";
import Gadgets from "../Components/Gadgets.jsx";
import product1 from "../assets/data/Gadgets.json";
import "../styles/gadget.css";
import "../styles/tittlcard2.css";
import Offerpanel from "../Components/Offerpanel.jsx";
import offerdata from "../assets/data/Offerpaneldata.json";
import "../styles/offerpanel.css";
import product2 from "../assets/data/Productclothes.json";
import "../styles/feature.css";
import Features from "../Components/Features.jsx";
import product3 from "../assets/data/Banner2.json";
import Service from "../Components/Service.jsx";
import "../styles/services.css";
import obj1 from "../assets/data/Productclothes.json";
import Tittlecard from "../Components/Tittlecard.jsx";
import ProductList from "../Components/ProductList.jsx";
const Home = () => {
  const [timer, setTimer] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [clothes, setClothes] = useState([]);
  // const api = import.meta.env.VITE_API_URL;
  const Timer = () => {
    return (
      <>
        <div className="colon">
          <p className="times m-0">Days</p>
          <p className="date">{timer?.d}</p>
        </div>
        <div className="colon">
          <p className="times m-0">Hours</p>
          <p className="date"> {timer?.h}</p>
        </div>
        <div className="colon">
          <p className="times m-0">Minutes</p>
          <p className="date"> {timer?.m}</p>
        </div>
        <div className="colon">
          <p className="times m-0">Seconds</p>
          <p className="date">{timer?.s}</p>
        </div>
      </>
    );
  };

  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => ({
        ...prev,
        d: new Date().getDay().toString().padStart(2, "0"),
        h: new Date().getHours().toString().padStart(2, "0"),
        m: new Date().getMinutes().toString().padStart(2, "0"),
        s: new Date().getSeconds().toString().padStart(2, "0"),
      }));
    }, 1000);
  }, []);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setClothes(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <main>
        <div className="split1">
          <div className="saidcontent">
            <ul className="m-0">
              <li className="svg1">
                <a href="#">Women's Fashion</a>
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.95 6.364L0 1.414L1.414 0L7.778 6.364L1.414 12.728L0 11.314L4.95 6.364Z"
                    fill="black"
                  />
                </svg>
              </li>
              <li className="svg2">
                <a href="#">Men's Fashion</a>
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.95 6.364L0 1.414L1.414 0L7.778 6.364L1.414 12.728L0 11.314L4.95 6.364Z"
                    fill="black"
                  />
                </svg>
              </li>
              <li>
                <a href="#">Electronics</a>
              </li>
              <li>
                <a href="#">Home & Lifestyle</a>
              </li>
              <li>
                <a href="#">Medicine</a>
              </li>
              <li>
                <a href="#">Sports & Outdoor</a>
              </li>
              <li>
                <a href="#">Baby's & Toys</a>
              </li>
              <li>
                <a href="#">Groceries & Pets</a>
              </li>
              <li>
                <a href="#">Health & Beauty</a>
              </li>
            </ul>
          </div>
          <Slideshow props={Banner} />
        </div>
        <div>
          <div>
            <Tittlecard
              items={"Today's"}
              title={"Flash Sales"}
              date={Timer()}
              rightcomponent={
                <>
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                    <path
                      d="M22 16L15 23L22 30M15 23H31"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                    <path
                      d="M14.5 23H31M31 23L24 16M31 23L24 30"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
              }
            />
          </div>
          <div>
            <ProductList
              items={clothes}
              classname4={"price"}
              classname5={"rating"}
              offerhide={"offer"}
              cardalign={"cardalign"}
            />
          </div>
          <div>
            <Button
              item={"View All Products"}
              classname={"viewbtn"}
              classname1={"alignbtn"}
            />
          </div>
          <div className="borderfor"></div>
        </div>
        <div>
          <Tittlecard
            items={"Categories"}
            title={"Browse By Category"}
            rightcomponent={
              <>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                  <path
                    d="M22 16L15 23L22 30M15 23H31"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                  <path
                    d="M14.5 23H31M31 23L24 16M31 23L24 30"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </>
            }
          />
        </div>
        <div>
          <Gadgets items={product1} />
        </div>
        <div className="borderfor"></div>
        <div>
          <Tittlecard
            items={"This Month"}
            title={"Best Selling Products"}
            rightcomponent={
              <>
                <Button
                  item={"View All"}
                  classname={"viewall"}
                  classname1={"alignbtn1"}
                  cardalign={"cardalign"}
                />{" "}
              </>
            }
          />
        </div>
        <div>
          <ProductList
            items={obj1}
            classname4={"price"}
            classname5={"rating"}
            cardalign={"cardalign"}
          />
        </div>
        <div>
          <Offerpanel
            items={offerdata}
            timer={timer}
            classname={"greensty"}
            classname1={"greenbtn"}
          />
        </div>
        <div>
          <Tittlecard
            items={"Our Products"}
            title={"Explore Our Products"}
            rightcomponent={
              <>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                  <path
                    d="M22 16L15 23L22 30M15 23H31"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                  <path
                    d="M14.5 23H31M31 23L24 16M31 23L24 30"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
              </>
            }
          />
        </div>
        <div>
          <ProductList
            items={product2}
            classname4={"pricingnew"}
            classname5={"ratinglinenew"}
            flexbo={"wrap"}
            offerhide={"offer1"}
            cardalign={"cardalign"}
          />
        </div>
        <div>
          <Button
            item={"View All Products"}
            classname={"viewbtn"}
            classname1={"alignbtn"}
          />
        </div>
        <div>
          <Tittlecard items={"Featured"} title={"New Arrival"} />
        </div>
        <div>
          <Features item={product3} />
        </div>
        <div>
          <Service />
        </div>
      </main>
    </>
  );
};

export default Home;
