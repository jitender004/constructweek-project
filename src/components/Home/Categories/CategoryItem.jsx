import styled from "styled-components";
import { mobile } from "../../../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
 background-color:black;
 cursor:pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  // z-index:-1;
  opacity: 0.8;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    font-family:Georgia, serif;
    text-transform:uppercase;
    // justify-content:center;
    text-align:center;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    // margin-top:30px
`;

const CategoryItem = ({ item }) => {
  return (
    <>
    <Container width="100%">
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
    
    </>
  );
};

export default CategoryItem;