import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Offerimg = () => {
  return (
    <div>
   <Link to="demo"><img src='./offer.png'></img></Link>
      <Outlet/>
    </div>
  )
}

export default Offerimg
