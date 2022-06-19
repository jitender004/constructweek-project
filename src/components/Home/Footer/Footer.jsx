import "./Footer.css";
import { Image, Grid, GridItem, Text, Center, Button } from "@chakra-ui/react";
// import{Box, GridItem,MenuList,Text,MenuItem} from "@chakra-ui/react"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Footer1 from "./Footer1";

export const Footer = () => {
  const footer_arr = [
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-1-oneBythree-04March2022.jpg",
      title: "UP TO 50% OFF THE DENIM SHOP FOR HIM & HER",
      des: "From Hudson Jeans, Joe's Jeans, J Brand & More",
      btn_text: "SHOP DENIM",
    },
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-2-oneBythree-04March2022.jpg",
      title: "UP TO 50% OFF LIGHTWEIGHT JACKETS & Shirts",
      des: "Must-Haves From Cole Haan, Burberry, & More",
      btn_text: "SHOP OUTERWEAR",
    },
    {
      imgurl:
        "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-3-oneBythree-23March2022A.jpg",
      title: "UP TO 50% OFF Jeans MUST-HAVE ACCESSORIES",
      des: "Shop Wallets, Belts, Hats, Sunglasses & More",
      btn_text: "SHOP MEN'S ACCESSORIES",
    },
  ];

  return (
    <>
      <div>
        <Center>
          <Grid templateColumns="repeat(3, 1fr)" gap={1}>
            {footer_arr.map((e) => {
              return (
                <Center>
                  <GridItem w="100%" p="5" mt="5" mb="5">
                    <Image w="100%" h="300" src={e.imgurl} />
                    <Center>
                      <Text mt="2">{e.title}</Text>
                    </Center>
                    <Center>
                      <Text mt="2">{e.des}</Text>
                    </Center>
                    <Center>
                      <Button
                        mt="4"
                        bg="white"
                        color="black"
                        border="1px solid black"
                      >
                        {e.btn_text}
                      </Button>
                    </Center>
                  </GridItem>
                </Center>
              );
            })}
          </Grid>
        </Center>
        <hr></hr>
        <div className="footer">
          <div className="f_u">
            <div className="first">
              <h2 className="head">Women</h2>
              <br></br>
              <div className="inner">
                <div className="left">
                  <p>Tops</p>
                  <p>Ethnicwear</p>
                  <p>Dresses & Jumpsuits</p>
                  <p>Winterwear</p>
                  <p>Lingrie</p>
                  <p>Nightwear</p>
                  <p>Sportswear</p>
                  <p>Beauty</p>
                  <p>Watches & Sunglasses</p>
                </div>
                <div className="left">
                  <h2 className="head">Mens</h2>
                  <br></br>
                  <p>Tops</p>
                  <p>Bottom wear</p>
                  <p>Ethnic wear</p>
                  <p>Sunglasses</p>
                  <p>Jeans</p>
                  <p>Watches</p>
                  <p>Sunglasses</p>
                </div>
                <div className="left">
                  <h2 className="head">Kids</h2>
                  <br></br>
                  <p>Tops</p>
                  <p>Bottom wear</p>
                  <p>Ethnic wear</p>
                  <p>Sunglasses</p>
                  <p>Jeans</p>
                  <p>Watches</p>
                  <p>Sunglasses</p>
                </div>
                <div className="right">
                  <h2 className="head">About Us</h2>
                  <br></br>
                  <p>Carrier</p>
                  <p>About us</p>
                  <p>Take a tour</p>
                  <p>Blog</p>
                  <p>Store Locator</p>
                  <p>Landmark Cares</p>
                  {/* <p>Sunglasses</p> */}
                </div>
                
               
              </div>
            </div>
            <div className="second">
              <p className="head">SIGN UP AND SAVE</p>
              <br></br>
              <p>Subscribe to our awesome emails.</p>
              <br></br>
              <input
                className="inp"
                type="text"
                placeholder="Enter your email"
              />
              <br></br>
              <button className="btn" type="submit">
                Subscribe
              </button>
              <div className="icons">
                <FaInstagram />
                <br></br>
                <FaFacebook />
              </div>
            </div>
            <div className="third"></div>
          </div>

          <div className="f_l">
            <center>
              <img
                height="100%"
                width="100%"
                className="logo1"
                src="https://www.linkpicture.com/q/logo1_35.png"
                alt="i"
              />
              <p>
                © 2022 RNA Intellectual Property Limited. Terms & Conditions -
                Privacy Policy
              </p>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};
