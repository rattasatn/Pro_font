import React from "react";
import ProductCard from "../components/productCard/ProductCard";

function Favorite() {
  return (
    <div className="mx-5 mb-5">
      <h1 className=" text-center  mt-2">FAVORITE</h1>
      <div
        className="bg-primary m-auto mt-3 "
        style={{ width: "200px", height: "1px" }}
      ></div>
      <div className="d-flex justify-content-evenly  flex-wrap ">
        <ProductCard />
      </div>
    </div>
  );
}

export default Favorite;
