import React, { useState, useEffect } from "react";
import Carousel from "../components/carousel/Carousel";
import ProductCard from "../components/productCard/ProductCard";
import axios from "../config/axios";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/product");
      setProducts(res.data.products);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5 mb-5">
      <Carousel />

      <div className="d-flex justify-content-evenly  flex-wrap ">
        {products.map((el) => (
          <ProductCard
            productPic={el.productPic}
            productName={el.productName}
            price={el.price}
            brand={el.brand}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
