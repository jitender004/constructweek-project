import { background } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./product.css";

const ProductCard = ({
  id,
  img1,
  img3,
  title,
  owner,
  price,
  discounted_price,
  saveupto,
}) => {
  console.log("uii");
  // const products = useSelector((store) => store.products.products);
  return (
    <div className="card">
      <div key={id}>
        <div className="x">
          <a href="#" className="hover-switch">
            <img src={img1} />
            {/* <img src={e.img3} /> */}
          </a>
        </div>
        <img src={img3} style={{ height: "5%" }} alt="" />
        <p className="owner">{owner}</p>
        <h3 className="tit">{title}</h3>
        <div className="flex">
          <p className="price">${price}</p>
          <p className="dis_price">${discounted_price}</p>
          <p className="save">Save {saveupto}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
