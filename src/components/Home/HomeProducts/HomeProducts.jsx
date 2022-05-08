import styled from "styled-components";
import { popularProducts } from "../../../data";
import Product from "./HomeProduct";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
      <>
    <h2 style={{textAlign:"center",fontSize:"30px",fontFamily: "Tiemann,serif",marginTop:"30px"}}>SHOP BY CATEGORY</h2>
    <Container> 
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default Products;