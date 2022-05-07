import React from 'react'
import { Carousel } from "react-bootstrap"
import "./ControlledCarousel.css"
import { Image,Text,Button } from '@chakra-ui/react'
const ControlledCarousel = () => {
  return (
    <div className='wrapper'>
      <Carousel>
  <Carousel.Item interval={1000}>
    <Image
      className="d-block" 
      src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/fENDI_1400x.jpg?v=1630506238" width="100%" height="300"
      alt="First slide"
      h='400px'
    />
    <Carousel.Caption>
      <Text fontSize='6xl'>PRADA</Text>
      <Text fontSize='5xl'>UP TO 75% OFF</Text>
      <Text fontSize='3xl'>Designer Fashion up to 75% Off Shoes, Handbags, Dresses &amp; More</Text>
      <Button color='black'>SHOP NOW</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <Image
      className="d-block" 
      src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/gucci_1400x.jpg?v=1630503443"  width="100%" height="300"
      alt="Second slide"
      h='400px'
      
    />
    <Carousel.Caption>
      <Text fontSize='6xl'>GUCCI</Text>
      <Text fontSize='5xl'>UP TO 70% OFF</Text>
      <Text fontSize='3xl'>Designer Fashion up to 70% Off Shoes, Handbags, Dresses &amp; More</Text>
      <Button color='black'>SHOP NOW</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block" 
      src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Bottega_Veneta_1400x.jpg?v=1615206215"  width="100%" height="300"
      alt="Third slide"
      h='400px'
     
    />
    <Carousel.Caption>
      <Text fontSize='6xl'>FENDI</Text>
      <Text fontSize='5xl'>UP TO 60% OFF</Text>
      <Text fontSize='3xl'>Designer Fashion up to 60% Off Shoes, Handbags, Dresses &amp; More</Text>
      <Button color='black'>SHOP NOW</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default ControlledCarousel
