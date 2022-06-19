import { Image, Grid, GridItem, Text, Center, Button } from "@chakra-ui/react";
import "./NewArrival.css";
import { Link } from "react-router-dom";
export const NewArrival = () => {
  const img_arr = [
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007189442-Blue-Blue-1000007189442_01-2100.jpg",
      title: '"DIVA!" T-SHIRT',
      diss_price: "$694.00",
      price: "$420.60",
      save: "Save 39%",
    },
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008347599-Black-Black-1000008347599_01-2100.jpg",
      title: '"LA MEDUSA" RUBBER MULES',
      diss_price: "$492.00",
      price: "$385.29",
      save: "Save 22%",
    },
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000006564719-Black-Black-1000006564719_01-2100.jpg",
      title: '"THE FLUORO MOTO SHOT" BAG',
      diss_price: "$492",
      price: "$383.97",
      save: "Save 22%",
    },
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008347615-Blue-DarkStone-1000008347615_01-2100.jpg",
      title: "'FOR RIDING' RAINBOOTS",
      diss_price: "$473.00",
      price: "$347.65",
      save: "Save 27%",
    },
    {
      imgurl:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Bottomwear-Desktop1-21Sept2020.jpg",
      title: "'KIKI' STRAW CANOTIER HAT",
      diss_price: "$669.00",
      price: "$505.65 ",
      save: "Save 24%",
    },
  ];

  return (
    <div>
      <Center>
        <Text fontSize="4xl" mt={3}>
          NEW ARRIVALS
        </Text>
      </Center>
      <Center>
      <Link to="/product">
        <Button bg="black" color="white" mt={3}>
          VIEW ALL
        </Button>
        </Link>
      </Center>
      <Center>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {img_arr.map((e) => {
            return (
              <GridItem w="100%" p="5" mb="10">
                <Link to="/product">
                  <Image w="100%" h="300" src={e.imgurl} />
                </Link>
                <Center>
                  <p>{e.title}</p>
                </Center>
                <Center>
                  <span>{e.diss_price} from</span>&nbsp;&nbsp;
                  <span>{e.price}</span>&nbsp;&nbsp;
                  <Text color="red">{e.save}</Text>
                </Center>
              </GridItem>
            );
          })}
        </Grid>
      </Center>
      <hr />
    </div>
  );
};
