import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Text,
  Flex,
  Spacer,
  Box,
  DrawerCloseButton,
  Stack,
  Image,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Cartpage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState();
  const [qty, setQty] = useState(1);

  const updatecartqty = async(value, id)=>{
    const data = await axios.patch(`http://localhost:8080/items/${id}`,{qty:value})
    setQty(data.data.qty);
  }

  const handleQty = (value, id) => {
    updatecartqty(value, id);
  };

  const getCartData = async () => {
    const data = await axios.get("http://localhost:8080/items");
    // setItems(data.data);
    // console.log("atin",data.data);

    const cartdata = data.data.filter((el) => el.qty !== 0)

    // const sum = items.reduce((accumulator, e) => {
    //   return accumulator + e.price*e.qty;
    // }, 0);
    // setTotal(sum);

    setItems(cartdata);
    console.log(cartdata);
  };

  const subTotal = ()=>{
    const sum = items.reduce((accumulator, e) => {
      return accumulator + e.price*e.qty;
    }, 0);
    setTotal(sum);
  }

  useEffect(() => {
    getCartData();
    subTotal();
  }, [qty]);

  return (
    <div>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Text fontSize="4xl">CART</Text>
            <DrawerCloseButton mt="4" />
          </DrawerHeader>
          <DrawerBody>
            {items.map((e) => {
              return ( 
                <Box mb="5">
                  <Grid
                    templateRows="auto"
                    templateColumns="repeat(12,1fr)"
                    gap={4}
                    borderBottomWidth="2px"
                    pb="5"
                  >
                    <GridItem rowSpan={3} colSpan={3}>
                      <Image src={e.imgurl} />
                    </GridItem>
                    <GridItem colSpan={9} h="5">
                      <Text>{e.title}</Text>
                    </GridItem>
                    <GridItem colSpan={9}>
                      <Text>size/color</Text>
                    </GridItem>
                    <GridItem colStart={4}>
                      <Stack border="1px" direction="row">
                        <Button 
                        borderRight="1px" 
                        borderRadius="none" 
                        size="sm"
                        onClick={() => {
                          handleQty(e.qty-1, e.id);
                        }}
                        >
                          -
                        </Button>
                        <Center>
                          <Text>{e.qty}</Text>
                        </Center>
                        <Button
                          size="sm"
                          borderLeft="1px"
                          borderRadius="none"
                          onClick={() => {
                            handleQty(e.qty+1, e.id);
                          }}
                        >
                          +
                        </Button>
                      </Stack>
                    </GridItem>
                    <GridItem colEnd={12}>
                      <Text>{e.price}</Text>
                    </GridItem>
                  </Grid>
                </Box>
              );
            })}
            <Box>
              <Flex mt="4" mb="4">
                <Text>SUBTOTAL</Text>
                <Spacer />
                <Text>{total}</Text>
              </Flex>
              <Text mb="4">
                Shipping, taxes, and discounts codes calculated at checkout.
              </Text>
              <Button
                width="100%"
                bgColor="black"
                color="white"
                onClick={() => {
                  "<Payment></Payment>";
                }}
              >
                <Link to={"/payment"}>payment page</Link>
              </Button>
              
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
