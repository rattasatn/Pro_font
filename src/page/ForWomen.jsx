import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard/ProductCard";
import axios from "../config/axios";

function ForWomen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/product/women");
      setProducts(res.data.products);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5 mb-5">
      <h1 className=" text-center  mt-2">WOMEN</h1>
      <div
        className="bg-primary m-auto mt-3 "
        style={{ width: "200px", height: "1px" }}
      ></div>
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

export default ForWomen;
