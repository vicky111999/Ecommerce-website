// import React, { useState } from "react";

// const Slideshow = (props) => {
//   const [item, setItem] = useState(props.props);
//   const [bannerData, setBannerData] = useState(item[0] || {});
//   const handle = (index) => {
//     setBannerData(item[index]);
//     setItem(props.props)
//   };
//   return (
//     <div className="imgdiv">
//       <div>
//         <div>
//           <div className="textdiv">
//             <div className="logodiv">
//               <img src={bannerData?.logo} alt="logo" />
//               <p>{bannerData?.title}</p>
//             </div>

//             <p className="voucher">
//               {bannerData?.voucher} <span>off Voucher</span>
//             </p>

//             <div className="linkseries">
//               <a href="#">Shop Now</a>
//               <svg
//                 width="18"
//                 height="16"
//                 viewBox="0 0 18 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M0.75 7.75H17.25M17.25 7.75L10.25 0.75M17.25 7.75L10.25 14.75"
//                   stroke="#FAFAFA"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="imgalign">
//           <img src={bannerData?.image} alt="product" />
//         </div>
//       </div>
//       <div className="radiobtns">
//         {props.props.map((item, index) => (
//           <input
//             key={index}
//             type="radio"
//             name="slider"
//             defaultChecked={index === 0}
//             onClick={() => handle(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slideshow;

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/slideshowcss.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Slideshow(props) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="imgdiv">
          <div>
            {props?.props.map((item,index) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <div className="imgdiv">
                      <div>
                        <div className="textdiv">
                          <div className="logodiv">
                            <img src={item?.logo} alt="logo" />
                            <p>{item?.title}</p>
                          </div>

                          <p className="voucher">
                            {item?.voucher} <span>off Voucher</span>
                          </p>

                          <div className="linkseries">
                            <a href="#">Shop Now</a>
                            <svg
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                              xmlns="http:www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.75 7.75H17.25M17.25 7.75L10.25 0.75M17.25 7.75L10.25 14.75"
                                stroke="#FAFAFA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="imgalign">
                        <img src={item?.image} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </div>
          {/* <div className="radiobtns">
         {props.props.map((item, index) => (
           <input
             key={index}
             type="radio"
             name="slider"
             defaultChecked={index === 0}
             onClick={() => handle(index)}
           />
         ))}
       </div> */}
        </div>
      </Swiper>
    </>
  );
}
