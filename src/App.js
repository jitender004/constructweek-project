
import './App.css';
import React from "react";
import Home from './components/Home';
// import footer from "../"

import {Routes,Route} from "react-router-dom"
import { Login } from "./components/Home/Login/Login";
import { Sign } from "./components/Home/Signup/Sign";
import { Navbar }  from "./components/Home/Navbar/Navbar"
import { Footer } from './components/Home/Footer/Footer';

// import {Routes,Route} from "react-router-dom"

function App() {
  return (
   <>
      <Navbar />
      <Routes>
      <Route path={'/login'} element={<Login />}></Route>
      {/* <Route path={'/cart'} element={<Cart />}></Route> */}
      <Route path={'/sign'} element={<Sign />}></Route>
      <Route path={'/'} element={<Home />}></Route>
    </Routes>
    <Footer />
    
     </>

  );
}

export default App;
