import styled from "styled-components";

const Container = styled.div`
  // height: 30px;
  padding:10px;
  background-color:rgba(250,166,25);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>DEAL OF THE DAY: Flat 50% off + Free Shipping + Extra 10% off, use code: SALE10</Container>;
};

export default Announcement;
