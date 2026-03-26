import React, { useEffect } from "react";
import { Homepagenavi } from "./Svgcom";

const ScrollButton = () => {
    // const [behaviour,setbehaviour] = useState(false)
    // const scrolltotop = useRef(null)
  useEffect(() => {
    const scrollbehaviour = () => {
      if (window.scrollY > 200) {
        document.getElementById("scrollbtn").style.display = "block";
        // setbehaviour(true)
      } else {
        document.getElementById("scrollbtn").style.display = "none";
        // setbehaviour(false)
      }
    };

    window.addEventListener("scroll", scrollbehaviour);
    return () => window.removeEventListener("scroll", scrollbehaviour);
  }, []);
  const handle = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    {/* {behaviour && */}
      <button  onClick={handle} id="scrollbtn" className="navigationup">
        <Homepagenavi />
      </button>
      {/* } */}
    </>
  );
};

export default ScrollButton;
