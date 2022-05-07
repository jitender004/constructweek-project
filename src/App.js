import './App.css';
import React from "react";
// import { render } from "react-dom";
// import SimpleSlider from './components/SimpleSlider';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from './Pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
     <Home />
     <Footer></Footer>
    </div>
  );
}

export default App;
