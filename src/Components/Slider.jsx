import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Slider.css"
const Slider = () => {
  return (
    <div className='slider'>
      <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src="./1.jpg" className="sliderimg" alt=""/>
      <img src="./3.png" className="sliderimg" alt=""/>
      <img src="./4.png" className="sliderimg" alt=""/>
      <img src= "./2.jpg" className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  )
}

export default Slider
