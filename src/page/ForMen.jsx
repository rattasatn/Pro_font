import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard/ProductCard";
import axios from "../config/axios";

function ForMen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/product/men");
      setProducts(res.data.products);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5 mb-5">
      <h1 className=" text-center  mt-2">MEN</h1>
      <div
        className="bg-primary m-auto mt-3 "
        style={{ width: "100px", height: "1px" }}
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

export default ForMen;
