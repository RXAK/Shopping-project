import React from 'react'
import "./Review.css"
const Reviews = (props) => {
  return (
    <div className='Reviews'>
      <div className="Akash">
<img src={props.img} alt="" />
<span>{props.name}</span>
<p>{props.text}</p>
      </div>
      <div className="Robin">

      </div>
      <div className="Rashmi">

      </div>
      <div className="Sachin">

      </div>
      <div className="Sangram">

      </div>
    </div>
  )
}

export default Reviews
