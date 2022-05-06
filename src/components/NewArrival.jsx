// import {
//     FavoriteBorderOutlined,
//     SearchOutlined,
//     ShoppingCartOutlined,
//   } from "@material-ui/icons";
import styled from "styled-components";
  
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(250,252,250,0.6);
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  // border-radius: 50%;
  // background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Title = styled.h2`
  color:rgba(255,25,0,0.5);
  margin-bottom: 20px;
  font-family:Georgia;
  text-transform:uppercase;
 
  text-align:center;
`;




const NewArrival = ({ item }) => {
  return (
<>
    <Container>    
      <Circle />
      <Image src={item.img} />
      <Info>
      <Title>{item.title}</Title>
      </Info>
    </Container>
    </>
  );
  
};

export default NewArrival;