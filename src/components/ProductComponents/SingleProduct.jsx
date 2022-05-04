import React from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./single.css";
import { Carousel } from "react-carousel-minimal";
import ReactDOM from "react-dom";
import "react-image-gallery/styles/css/image-gallery.css";
// import { AuthContext } from "../context/AuthContext";

const SingleProduct = () => {
  const products = useSelector((store) => store.products.products);
  const { id } = useParams();
  console.log("id", products, id);

  return (
    <div>
      {products.map((e) =>
        e.id == id ? (
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
                        image: `${e.img1}`,
                      },
                      {
                        image: `${e.img2}`,
                      },
                      {
                        image: `${e.img3}`,
                      },
                    ]}
                    time={4000}
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
              <p className="ow">{e.owner}</p>
              <h1 style={{ fontSize: "30px" }}>{e.title}</h1>
              <div className="fl">
                <p className="price">${e.price}</p>
                <p className="dis_price">${e.discounted_price}</p>
                <p className="save">Save {e.saveupto}%</p>
              </div>
              <p>FREE SHIPPING ON ORDERS OVER $99</p>
              <hr style={{ marginTop: "30px" }} />
              <button className="black">ADD TO CART</button>
              <p>Usually ships in 1 to 2 business days</p>
              <br />
              <p>{e.des}</p>
              <ul>
                <li>SKU:{e.code}</li>
              </ul>
              <h3>SHARE</h3>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default SingleProduct;
