import { Link } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "../../../data";
import Product from "./HomeProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HomeProducts = () => {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontFamily: "Tiemann,serif",
          marginTop: "30px",
        }}
      >
        SHOP BY CATEGORY
      </h2>
      <Container>
        {popularProducts.map((item) => (
          <Link to="/product">
            <Product item={item} key={item.id} />
          </Link>
        ))}
      </Container>
    </>
  );
};

export default HomeProducts;
