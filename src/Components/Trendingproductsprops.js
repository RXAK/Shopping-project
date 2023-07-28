import React from 'react'
import Trendingproducts from './Trendingproducts'
// import "./Trendingproducts.css"

const Trendingproductsprops = () => {
  return (
    <div className='Heading-200'>
        <h1>TRENDING SKINCARE PRODUCTS</h1>
    <div className='Trendingproductsprops'>
    <Trendingproducts img="./aqua-glow-gel-face-moisturizer-1_1.jpg" name="Aqua glow gel moisturizer" price="250/ Rs."/>
      <Trendingproducts img="./vit-c-day_cream-1_1.jpg"  name="Vitamin c day cream" price="180/ Rs."/>
      <Trendingproducts img="./vitamin_c_face_wash_1.jpg"  name="Vitamin c Face-wash" price="300/ Rs."/>
      <Trendingproducts img="./1-with-ingredient.jpg" name="Charcol Face pack" price=" 700/ Rs." />
      <Trendingproducts img="./henna-paste.jpg" name="Color paste" price="90/ Rs."/>
      <Trendingproducts img="./multani_mitti_face_pack_1.jpg" name="Multani mitti Face pack" price="530/ Rs."/>
    </div>
    <button className='view'>VIEW ALL</button>
    </div>
  )
}

export default Trendingproductsprops
