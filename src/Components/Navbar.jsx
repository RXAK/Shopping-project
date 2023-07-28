import React from 'react'
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='main'>
        <div className="logo">
            <h1>Logo</h1>
            
        </div>
        {/*  */}
<div className="search">
    <input type="Search" placeholder='Search product' />
    </div>      
    {/*  */}
    <div className="cart">
        <h1><FaShoppingCart /></h1>
        <h1><FaHeart/></h1>
    </div>
    {/*  */}
    <div className="btns1">
        <button className='Login'>Login</button>
        <button className='Register'>Get Started</button>
    </div>
    <div className="account">
      <h1><FaUser/></h1>
    </div>
    </div>
  )
}

export default Navbar
