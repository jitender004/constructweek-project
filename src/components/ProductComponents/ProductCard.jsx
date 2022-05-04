import { background } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./product.css";

const ProductCard = () => {
  console.log("uii");
  const products = useSelector((store) => store.products.products);
  return (
    <div className="card">
      {products.map((e) => (
        <div key={e.id}>
          {/* <img
            src={e.img1}
            alt=""
            onMouseOver={(this.src = require{e.img2})}
          /> */}
          <a href="#" className="hover-switch">
            <img
              src={e.img1}
              style={{
                backgroundImage: `url(${e.img3})`,
              }}
            />
            <img src={e.img3} />
          </a>

          <p className="owner">{e.owner}</p>
          <h3 className="tit">{e.title}</h3>
          <div className="flex">
            <p className="price">${e.price}</p>
            <p className="dis_price">${e.discounted_price}</p>
            <p className="save">Save {e.saveupto}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
