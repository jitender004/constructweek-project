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
  const Title = styled.h1`
    color:rgba(0,0,0,0.8);
    font-size:23px;
    margin-bottom: 20px;
    color:white;
    font-family:Tiemann,serif;
    text-transform:uppercase;
   background-color:black;
//  padding:20px
  // border: 1px solid blue;
   box-sizing: border-box;
    text-align:center;
`;
  
  
  
  const HomeProduct = ({ item }) => {
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
  
  export default HomeProduct;