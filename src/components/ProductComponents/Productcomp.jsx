import React from "react";
import { SimpleGrid, Checkbox } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { addProduct } from "../../Redux/Product/ProductAction";
import ProductCard from "./ProductCard";
import "./product.css";
import Paginate from "./Paginate";
import { Select } from "@chakra-ui/react";

const Productcomp = () => {
  const dataProducts = useSelector((store) => store.products.products);
  // console.log("Productsss", dataProducts);
  const [pro, setpro] = useState(dataProducts);
  let [results, setResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const postPerPage = 3;
  const totalPosts = results.length;

  useEffect(() => {
    setpro(dataProducts);
    setResults(dataProducts.length);
    getData();
  }, []);
  console.log("Productsss", pro);

  const sorting = (x) => {
    if (x.target.value === "PRICEHL") {
      setpro((prev) => [
        ...prev.sort((a, b) => b.discounted_price - a.discounted_price),
      ]);
    } else if (x.target.value === "PRICELH") {
      setpro((prev) => [
        ...prev.sort((a, b) => a.discounted_price - b.discounted_price),
      ]);
    } else if (x.target.value === "TITLE-A-Z") {
      setpro((prev) => [...prev.sort((a, b) => (a.title > b.title ? 1 : -1))]);
    } else if (x.target.value === "TITLE-Z-A") {
      setpro((prev) => [...prev.sort((a, b) => (b.title > a.title ? 1 : -1))]);
    }
    console.log(pro, "filt");
  };

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
        <h1 style={{ fontSize: "40px" }}>Women's Jewelry & Watches</h1>

        <div className="sec">
          <div>
            <h3>{`Showing ${results} results for "Women's Bracelets"`}</h3>
          </div>
          <div className="sorting">
            <Select width="200px" onChange={sorting}>
              <option value="BESTSELLING">BESTSELLING</option>
              <option value="TITLE-A-Z">TITLE A-Z</option>
              <option value="TITLE-Z-A">TITLE Z-A</option>
              <option value="PRICELH">PRICE LOW TO HIGH</option>
              <option value="PRICEHL">PRICE HIGH To LOW</option>
            </Select>
          </div>
        </div>

        <div className="splitmainpage">
          <div className="filter">
            <div className="sorting" height="auto">
              {/* // filter accouring to brand */}
              <Accordion defaultIndex={[0]} allowMultiple>
                {/* // filter accouring to BESTSELLING */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        CATEGORY
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox value="BESTSELLING">Watches</Checkbox>
                    <br />
                    <Checkbox value="BESTSELLING">Jewelry</Checkbox>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        BRAND
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox value="BESTSELLING">Chloe</Checkbox>
                    <br />
                    <Checkbox value="BESTSELLING">Gucci</Checkbox>
                    <br />
                    <Checkbox value="BESTSELLING">Gucci</Checkbox>
                    <br />
                  </AccordionPanel>
                </AccordionItem>

                {/* // filter accouring to price */}

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        PRICE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox value="low">From $100-$499</Checkbox>
                    <br />
                    <Checkbox value="mig">From $500-$999</Checkbox>
                    <br />
                    <Checkbox value="high">Above 1000</Checkbox>
                    <br />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

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
              {pro &&
                pro.map((el) => (
                  <ProductCard
                    key={el.id}
                    id={el.id}
                    img1={el.img1}
                    img3={el.img3}
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
      {totalPosts > postPerPage && (
        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPosts={totalPosts}
          postPerPage={postPerPage}
        />
      )}
    </div>
  );
};

export default Productcomp;
