import styled from "styled-components";
import { NewArrivalproduct } from "../data";
import NewArrival from "./NewArrival";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const NewArrivals= () => {
  return (
      <>
    <h2 style={{textAlign:"center",fontSize:"30px",fontFamily: "Tiemann,serif"}}>New Arrivals </h2>
    <button>Shop Now</button>
    <Container> 
      {NewArrivalproduct.map((item) => (
        <NewArrival item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default NewArrivals;