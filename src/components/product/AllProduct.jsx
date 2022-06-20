import React, { useEffect } from "react";
import AllProductCard from "./AllProductCard";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

function AllProduct() {
  const { logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
    }
  }, [location.state]);

  return (
    <div>
      <div>
        <h1 className=" text-center  mt-5">All PRODUCT</h1>
        <div
          className="bg-primary m-auto mt-3  "
          style={{ width: "300px", height: "1px" }}
        ></div>
        <AllProductCard refreshId={location.state.refresh} />
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
