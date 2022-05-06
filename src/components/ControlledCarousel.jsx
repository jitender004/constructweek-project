import React from 'react'
import { Carousel } from "react-bootstrap"
import "./ControlledCarousel.css"
const ControlledCarousel = () => {
  return (
    <div className='wrapper'>
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block" 
      src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/fENDI_1400x.jpg?v=1630506238" width="100%" height="300"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Designer Fashion up to 70% Off Shoes, Handbags, Dresses &amp; More</p>
      <button>SHOP NOW</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block" 
      src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/gucci_1400x.jpg?v=1630503443"  width="100%" height="300"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Designer Fashion up to 70% Off Shoes, Handbags, Dresses &amp; More</p>
      <button>SHOP NOW</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block" 
      src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Bottega_Veneta_1400x.jpg?v=1615206215"  width="100%" height="300"
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h3></h3> */}
      <p>Designer Fashion up to 70% Off Shoes, Handbags, Dresses &amp; More</p>
      <button>SHOP NOW</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default ControlledCarousel
