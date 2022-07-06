import React, { useEffect, useState } from "react";
import AllProductCard from "./AllProductCard";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import axios from "../../config/axios";

function AllProduct() {
  const { logout } = useAuth();
  const location = useLocation();
  const [product, setProduct] = useState([]);

  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/product");
      console.log(res.data);
      setProduct(res.data.products);
    };
    fetchData();
  }, [fetch]);

  const handleDelete = async (id) => {
    await axios.delete(`/product/${id}`);
    console.log("deleted");
    setFetch(!fetch);
  };

  return (
    <div>
      <div>
        <h1 className=" text-center  mt-5">All PRODUCT</h1>
        <div
          className="bg-primary m-auto mt-3  "
          style={{ width: "300px", height: "1px" }}
        ></div>
        {product.map((el) => (
          <AllProductCard
            key={el.id}
            product={el}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="d-flex justify-content-end mx-3 my-5">
        <Link className="btn btn-dark " to="/AddProduct">
          ADD MORE PRODUCT
        </Link>
        <button className="btn btn-dark mx-5" onClick={logout}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
}

export default AllProduct;
