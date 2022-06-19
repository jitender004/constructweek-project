import React from 'react'
import "./Trendin.css";
import { Link } from "react-router-dom";
import { trendingProduct } from "../../../data";
const TrendingProduct = () => {
  return (
    <>
    <h2
      style={{
        // textAlign: "center",
        marginLeft:"50px",
        fontSize: "30px",
        fontFamily: "Tiemann,serif",
        marginTop: "30px",
        marginBottom:"20px"
      }}
    >
      Top Trending Brands
    </h2>
    <div className='container1' >
        <div className="row row-cols-6">
      {trendingProduct.map((item) => (
        <Link to="/product">
          <div key={item.id} className="col"><img src={item.img} alt="noting here.." /></div>
        </Link>
      ))}
      </div>
     

    </div>
    <hr className='hr' />
    <div className='container2'>
    <Link to="/product">
       <img className='image' src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-Men-10June2022.jpg" alt="trendingproudcts..." />
       </Link>
    </div>
    <hr className='hr' />
  </>
  )
}

export default TrendingProduct