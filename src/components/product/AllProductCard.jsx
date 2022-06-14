import React, { useEffect, useState } from "react";
import defaultProductPic from "../../images/chanel.webp";
import axios from "../../config/axios";

function AllProductCard() {
  const [product, setProduct] = useState([]);
  const [productPic, setProductPic] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/product");
      console.log(res.data);
      setProduct(res.data.products);
      setProductPic(res.data.products.productPic);
      setProductName(res.data.products.productName);
      setPrice(res.data.products.price);
      setBrand(res.data.products.brand);
      setBrand(res.data.products.quantity);
    };
    fetchData();
  }, []);
  return product.slice(0, 30).map((el) => (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <img
          src={el.productPic || defaultProductPic}
          alt="ProductPic "
          style={{ width: "150px", height: "200px" }}
        />
        <div className="w-50  ms-5">
          <p>BRAND :{el.brand}</p>
          <p>PRODUCT NAME :{el.productName}</p>
          <p>PRICE :{el.price}</p>
          <p>QUANTITY :{el.quantity} </p>
          <div>
            <button className="btn btn-dark"> DELETE </button>
          </div>
        </div>
      </div>
      <div
        className="bg-primary m-auto mt-3  "
        style={{ width: "1000px", height: "1px" }}
      ></div>
    </div>
  ));
}

export default AllProductCard;
