import React from 'react'
import './Navbar.css'

const Categories = () => {
  return (
    <div className='Catogories'>
      <div className="men">
        <select>
            <option value="">MEN</option>
            <option value="">Haircare</option>
            <option value="">Skincare</option>
            <option value="">Beardcare</option>
        </select>
      </div>
      <div className="men">
        <select>
            <option value="">WOMEN</option>
            <option value="">Haircare</option>
            <option value="">Skincare</option>
            </select>
      </div>
      <div className="men">
        <select name="" id="">
           <option value="">BRANDS</option>
        </select>
      </div>
      <div className="men">
      <select name="" id="">
           <option value="">NEW</option>
        </select>
      </div>
      <div className="men">
      <select name="" id="">
           <option value="">OFFERS</option>
        </select>
      </div>
    </div>
  )
}

export default Categories
