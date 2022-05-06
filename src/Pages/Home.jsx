import React from 'react'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Products from '../components/Products'
import ControlledCarousel from '../components/ControlledCarousel'
// import NewArrival from '../components/NewArrival'



const Home = () => {
  return (
    <div>
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <ControlledCarousel />
      {/* <NewArrival /> */}
      {/* <contr */}
    </div>
  )
}

export default Home
