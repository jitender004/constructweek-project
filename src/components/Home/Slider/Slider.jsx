import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../../data";
import { mobile } from "../../../responsive";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  // border:1px solid red;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 50, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  // width:100%
  // border:1px solid black;
  transition: all 0.8s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImgContainer = styled.div`
  height: 100%;
  // width:100%;
  // flex: 1;
  // border:1px solid red;
`;

const Image = styled.img`
  height: 100%;
  // margin-top:10px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 25px;
  margin-bottom: 60px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 50px;
  color: #ebe4e4;
  font-weight: 700;
  font-family: Futura, sans-serif;
`;

const Desc = styled.p`
  margin: 40px 0px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 3px;
  color: #f0e7e7;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: teal;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
  border: none;
  color: white;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide img={item.img} key={item.id}>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
