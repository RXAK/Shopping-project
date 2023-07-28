import React from 'react'
import Trendingproducts from './Trendingproducts'
// import "./Trendingproducts.css"

const TrendingHairsProps = () => {
  return (
    <div className='Heading-300'>
        <h1>TRENDING HAIRCARE PRODUCTS</h1>
    <div className='TrendingHairsProps'>
    <Trendingproducts img="./hair1.jpg" name="Scalp Serum Anti hairfall" price="250/ Rs."/>
      <Trendingproducts img="./hair-2.jpg"  name="Vitamin c day cream" price="180/ Rs."/>
      <Trendingproducts img="./hair3.jpg"  name="Vitamin c Face-wash" price="300/ Rs."/>
      <Trendingproducts img="./hair4.jpg" name="Charcol Face pack" price=" 700/ Rs." />
      <Trendingproducts img="./hair5.jpg" name="Color paste" price="90/ Rs."/>
      <Trendingproducts img="./hair6.jpg" name="Multani mitti Face pack" price="530/ Rs."/>
    </div>
    <button className='view'>VIEW ALL</button>
    </div>
  )
}

export default TrendingHairsProps
