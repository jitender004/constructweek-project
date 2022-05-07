import React from 'react'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Products from './Home/Products/Products'
import ControlledCarousel from './Home/ControlledCarousel/ControlledCarousel'
import { NewArrival } from './Home/NewArrival/NewArrival'
import { Tremding } from './Home/Tremding/Trending'


const Home = () => {
  return (
    <div>
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <ControlledCarousel />
      <NewArrival />
      <Tremding />
    </div>
  )
}

export default Home
