import React from "react";
import Slider from "../components/Home/Slider/Slider";
import Announcement from "../components/Home/Announcement/Announcement";
import Categories from "../components/Home/Categories/Categories";
import HomeProducts from "../components/Home/HomeProducts/HomeProducts";
import ControlledCarousel from "../components/Home/ControlledCarousel/ControlledCarousel";
import { NewArrival } from "../components/Home/NewArrival/NewArrival";
import { Tremding } from "../components/Home/Tremding/Trending";
import TrendingProduct from "./Home/HomeProducts/TrendingProduct";
// import { Navbar } from './Home/Navbar/Navbar'
// import { Footer } from './Home/Footer/Footer'

const Home = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <Announcement />
      <Slider />
      <Categories />
      <HomeProducts />
      <hr />
     
      <TrendingProduct />
      {/* <ControlledCarousel /> */}
      <NewArrival />
      <Tremding />
    </div>
  );
};

export default Home;
