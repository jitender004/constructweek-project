import {
  Image,
  Grid,
  GridItem,
  Text,
  Center,
  Button,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Tremding = () => {
  const img_arr = [
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011259619-Green-Mint-1000011259619_01-2100.jpg",
      title: "BOSSINI Men Striped Band Collar Casual Shirt",

      diss_price: "$694.00",
      price: "$420.60",
      save: "Save 39%",
    },
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920798-Blue-MidBlue-1000010920798_01-2100.jpg",
      title: "BOSSINI Men Striped Band Jeans",
      diss_price: "$492.00",
      price: "$385.29",
      save: "Save 22%",
    },
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010651664-Green-1000010651664_01-2100.jpg",
      title: "CELIO Men Solid Band Collar T-shirt",
      diss_price: "$492",
      price: "$383.97",
      save: "Save 22%",
    },
    {
      imgurl:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Fame-Forever-Desktop2-13May2022A.jpg",
      title: "JACQUEMUS BROWN 'LE BAMBINO' LEATHER CROSSBODY PURSE",
      diss_price: "$473.00",
      price: "$347.65",
      save: "Save 27%",
    },
    {
      imgurl:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Levis-Desktop4-13May2022A.jpg",
      title: "Flyout-Mens-Levis",
      diss_price: "$669.00",
      price: "$505.65 ",
      save: "Save 24%",
    },
    {
      imgurl:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-US-Polo-Desktop3-13May2022A.jpg",
      title: "Flyout-Mens-US-Polo",
      diss_price: "$694.00",
      price: "$420.60",
      save: "Save 39%",
    },
    {
      imgurl:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Activewear-Desktop1-21Sept2020.jpg",
      title: "Flyout-Mens-Activewear",
      diss_price: "$492.00",
      price: "$385.29",
      save: "Save 22%",
    },
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011211192-Black-Black-1000011211192_01-2100.jpg",
      title: "PUMA Men Checked Polo Neck T-shirt",
      diss_price: "$492",
      price: "$383.97",
      save: "Save 22%",
    },
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010945078-Beige-Khaki-1000010945078_01-2100.jpg",
      title: " UNITED COLORS OF BENETTON Men Checked Slim Fit Casual Shirt ",
      diss_price: "$473.00",
      price: "$347.65",
      save: "Save 27%",
    },
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010803847-Black-Black-1000010803847_01-2100.jpg",
      title: "PUMA Men Colorblocked Elasticated Track Pants",
      diss_price: "$669.00",
      price: "$505.65 ",
      save: "Save 24%",
    },
  ];

  return (
    <div>
      <Center>
        <Text fontSize="4xl" mt="10" mb="5">
          TRENDING NOW
        </Text>
      </Center>
      <Center>
        <Grid templateColumns="repeat(5, 1fr)">
          {img_arr.map((e) => {
            return (
              <GridItem w="100%" p="5">
                <Box h="220px">
                <Link to="/product">
                  <Image w="100%" maxH="200px" src={e.imgurl} />
                  </Link>
                </Box>
                <Center>
                  <Box textAlign="center">
                    <Text mb="2">{e.title}</Text>
                  </Box>
                </Center>
                <Center>
                  <Text as="del" p="1">
                    {e.diss_price} from
                  </Text>
                  <Text p="1">{e.price}</Text>
                  <Text color="red" p="1">
                    {e.save}
                  </Text>
                </Center>
              </GridItem>
            );
          })}
        </Grid>
      </Center>
      <Center>
        <Button bg="black" color="white" mb="5">
          VIEW ALL
        </Button>
      </Center>
      <hr></hr>
    </div>
  );
};
