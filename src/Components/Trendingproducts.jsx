import React from 'react'
import "./Trendingproducts.css"
import { FaHeart } from "react-icons/fa";
const Trendingproducts = (props) => {

  return (
    
    <div className='Trendingproducts'>
      <img src={props.img} alt="" className='images1' height={250} width={230}/>
      <h5>{props.name}</h5>
      <h4>{props.price}</h4>
      <button onClick={() => alert('Product Succesfully Added in Cart')}><FaHeart/> Add To cart</button>
    </div>
   
    
  )
}

export default Trendingproducts
