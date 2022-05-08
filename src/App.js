
import './App.css';
import React from "react";
import Home from './components/Home';
// import footer from "../"

import { Routes, Route } from "react-router-dom"
import { Login } from "./components/Home/Login/Login";
import { Sign } from "./components/Home/Signup/Sign";
import { Navbar } from "./components/Home/Navbar/Navbar"
import { Footer } from './components/Home/Footer/Footer';
import Productcomp from "./components/ProductComponents/Productcomp";
import SingleProduct from "./components/SingleProductCopm/SingleProduct";
import {Cart} from './components/payment/Cart'
import { PaymentSuccess} from './components/payment/PaymentSuccess'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/sign'} element={<Sign />}></Route>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/product'} element={<Productcomp />}></Route>
        <Route path={'/product/:id'} element={<SingleProduct />}></Route>
        <Route path='/payment/:id' element={<Cart />}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
      </Routes>
      <Footer />

    </>

  );
}

export default App;
