import React from 'react'
import truck from '../assets/feature-free.png'
import care from '../assets/feature-services.png'
import serve from '../assets/feature-money.png'
const Service = () => {
  return (
<div class="services">

  <div class="service-box">
    <img src={truck} alt='truck'></img>
    <h4>FREE AND FAST DELIVERY</h4>
    <p>Free delivery for all orders over $140</p>
  </div>

  <div class="service-box">
    <img src={care} alt='care'></img>
    <h4>24/7 CUSTOMER SERVICE</h4>
    <p>Friendly 24/7 customer support</p>
  </div>

  <div class="service-box">
    <img src={serve} alt='service'></img>
    <h4>MONEY BACK GUARANTEE</h4>
    <p>We return money within 30 days</p>
  </div>

</div>
)
}

export default Service