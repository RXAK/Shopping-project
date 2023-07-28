import React from 'react'
import "./Services.css"
import {FaShippingFast } from "react-icons/fa"
import {FaRegGrinStars } from "react-icons/fa"
import {FaTruckRampBox } from "react-icons/fa"


const Services = () => {
  return (
    <div className='Services'>
      <div className="Shipping">
      
<h1> <FaShippingFast/> EASY SHIPPING</h1>
<p>ON ORDERS ABOVE 500/ RS.</p>
      </div>
      <div className="products">
<h1><FaRegGrinStars/>AUTHENTIC PRODUCTS</h1>
<p>100% GENIUNE PRODUCTS</p>
      </div>
      <div className="returns">
      <h1><FaShippingFast/>EASY RETURNS</h1>
<p>EASY RETURNS IN TWO DAYS</p>

      </div>
      <div className="brands">
      <h1>500+ BRANDS</h1>
<p>LOTS OF POPULER BRANDS</p>
      </div>
    </div>
  )
}

export default Services
