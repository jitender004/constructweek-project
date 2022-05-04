import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { addProduct } from "../../Redux/Product/ProductAction";
import ProductCard from "./ProductCard";
import "./product.css";
import SliderThumbWithTooltip from "./SliderThumbWithTooltip";

import { Select } from "@chakra-ui/react";

const Productcomp = () => {
  const storedProducts = useSelector((store) => store.products.products);

  const dispatch = useDispatch();
  //   const [products, setProducts] = useState([]);
  console.log("Productsss", storedProducts);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8080/jewelry-watches").then((res) => {
      //   setProducts(res.data);
      dispatch(addProduct(res.data));
      //   console.log("update 2", res.data);
    });
  };

  // const products = storedProducts.map((pro) => <ProductCard key={pro.id} />);

  return (
    <div className="mainbody">
      <div>
        <div>
          <h1>Women's Jewelry & Watches</h1>
        </div>

        <div className="sec">
          <div>
            <h3>{`Showing ${1030} results for "Women's Bracelets"`}</h3>
          </div>
          <div className="sorting">
            <Select width="200px">
              <option value="BESTSELLING">BESTSELLING</option>
              <option value="TITLE-A-Z">TITLE A-Z</option>
              <option value="TITLE-Z-A">TITLE Z-A</option>
              <option value="PRICELH">PRICE LOW TO HIGH</option>
              <option value="PRICEHL">TITLE Z-A</option>
            </Select>
          </div>
        </div>

        <div className="splitmainpage">
          <div className="filter">
            <div className="sorting" height="auto">
              <Select placeholder="CATEGORY" border="none">
                <option value="option1">Bracelets</option>
              </Select>
              <Select placeholder="BRAND" border="none" color="black">
                <option value="option1">Chloe</option>
                <option value="option2">Gucci</option>
                <option value="option3">Prada</option>
              </Select>
              <Select placeholder="Select option" border="none">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              {/* <SliderThumbWithTooltip /> */}
            </div>
          </div>

          <div>
            <SimpleGrid
              className="product"
              columns={3}
              spacingX="20px"
              spacingY="20px"
            >
              {storedProducts.map((el) => (
                <ProductCard
                  key={el.id}
                  id={el.id}
                  img={el.img1}
                  title={el.title}
                  owner={el.owner}
                  price={el.price}
                  discounted_price={el.discounted_price}
                  saveupto={el.saveupto}
                />
              ))}
            </SimpleGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcomp;

//{storedProducts.map((pro) => <ProductCard key={pro.id} />)}
