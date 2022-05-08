import "react-image-gallery/styles/css/image-gallery.css";
import { Carousel } from "react-carousel-minimal";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import "./single.css";
import { Cartpage } from "../Cartcount/Cartpage";
import { useDisclosure } from "@chakra-ui/react";

const SingleProduct = () => {
  const [pro, setpro] = useState([]);
  const [side, setsidebar] = useState(false);
  const { id } = useParams();
  // console.log("id", pro, id);

  useEffect(() => {
    getData();
  }, []);

  const displayside = () => {
    setsidebar(true);
  };

  const getData = async () => {
    let data = await axios
      .get(`https://bluefly-api.herokuapp.com/product/${id}`)
      .then((res) => {
        // console.log(res.data);
        setpro(res.data);
      });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (pro.length === 0) return null;
  return (
    <div>
      <div className="onepro">
        <div className="forimg">
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "0 20px",
              }}
            >
              <Carousel
                data={[
                  {
                    image: `${pro.img1}`,
                  },
                  {
                    image: `${pro.img2}`,
                  },
                  {
                    image: `${pro.img3}`,
                  },
                ]}
                time={3000}
                width="900px"
                height="400px"
                // captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                // slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "10px auto",
                }}
              />
            </div>
          </div>
        </div>
        <div className="forinfo">
          <p className="ow">{pro.owner}</p>
          <h1 style={{ fontSize: "30px" }}>{pro.title}</h1>
          <div className="fl">
            <p className="price">${pro.price}</p>
            <p className="dis_price">${pro.discounted_price}</p>
            <p className="save">Save {pro.saveupto}%</p>
          </div>
          <p>Color - {pro.color}</p>
          <p>FREE SHIPPING ON ORDERS OVER $99</p>
          <hr style={{ marginTop: "30px" }} />

          <div>
            <p>SIZE</p>
            <div
              style={{
                display: "flex",
              }}
            >
              {pro.size.map((w) => (
                <p
                  style={{
                    border: "1px solid gray",
                    width: "45px",
                    padding: "7px 12px",
                    margin: "5px",
                  }}
                >
                  {w}
                </p>
              ))}
            </div>
          </div>

          <button onClick={() => displayside()} className="black">
            ADD TO CART
          </button>

          <p>Usually ships in 1 to 2 business days</p>
          <br />
          <p>{pro.des}</p>
          <ul>
            <li>SKU:{pro.code}</li>
          </ul>
          <h3>SHARE</h3>
        </div>
      </div>

      {side ? (
        <Cartpage
          isOpen={isOpen}
          onOpe={onOpen}
          onClose={onClose}
          setsidebar
          sidebar
        />
      ) : null}
    </div>
  );
};

export default SingleProduct;
