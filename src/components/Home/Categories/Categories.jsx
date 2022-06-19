import styled from "styled-components";
import { categories } from "../../../data";
import { mobile } from "../../../responsive";
import CategoryItem from "./CategoryItem";
import "./category.css"
const Categories = () => {
  return (
    <>
      <div  id="overlay" className="container">
        <a href=""></a><img height="100%" width="100%" src="https://www.linkpicture.com/q/catogry.jpg" alt="Be patient..." />
      </div>
      <hr></hr>
      <div  id="overlay" className="container">
        <a href=""></a><img height="100%" width="100%" src="https://www.linkpicture.com/q/catogry2.jpg" alt="Be patient..." />
      </div>
      <hr></hr>
      <div  id="overlay" className="container">
        <a href=""></a><img height="100%" width="100%" src="https://www.linkpicture.com/q/catogry3.jpg" alt="Be patient..." />
      </div>
      <hr></hr>
    </>
  );
};

export default Categories;
