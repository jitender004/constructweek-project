import React from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./single.css";
import ImagesGallery from "./ImagesGallery";
import ReactDOM from "react-dom";
import "react-image-gallery/styles/css/image-gallery.css";
// import { AuthContext } from "../context/AuthContext";

const SingleProduct = () => {
  const products = useSelector((store) => store.products.products);
  const { id } = useParams();
  console.log("id", products, id);

  const ImagesGallery = () => {
    const dataProducts = useSelector((store) => store.products.products);
    const imag = [];
    dataProducts.map((e) => {
      if (e.id == id) {
        let i1 = e.img1;
        imag.push(i1);
        let i2 = e.img1;
        imag.push(i2);
        let i3 = e.img1;
        imag.push(i3);
      }
    });
    console.log(imag, "imag");
    const [images, setImages] = React.useState(null);

    React.useEffect(() => {
      let shouldCancel = false;

      const call = () => {
        if (!imag && imag.data.length > 0) {
          setImages(
            imag.map((url) => ({
              original: `${url}=w1024`,
              thumbnail: `${url}=w100`,
            }))
          );
        }
      };
      call();
      return () => (shouldCancel = true);
    }, []);

    //  return images ? <ImageGallery items={images} /> : null;
  };

  return (
    <div>
      {products.map((e) =>
        e.id == id ? (
          <div className="onepro">
            <div className="forimg">
              {images ? <ImageGallery items={images} /> : null}
              {/* <ImagesGallery />  */}
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
{
  /* <div>
  {data.map((record) => (
    record.list.length > 0
      ? (<YourRenderComponent record={record} key={record.id} />)
      : null
  ))}
</div> */
}
