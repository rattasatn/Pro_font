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
  console.log(products);
  return (
    <div className="mx-5 mb-5">
      <Carousel />

      <div className="d-flex justify-content-evenly  flex-wrap ">
        {products.map((el) => (
          <ProductCard
            key={el.id}
            productPic={el.productPic}
            productName={el.productName}
            price={el.price}
            brand={el.brand}
            to={`/AddCart/${el.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
