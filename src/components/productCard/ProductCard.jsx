import React from "react";
import { Link } from "react-router-dom";
import defaultProductPic from "../../images/chanel.webp";

function ProductCard(props) {
  return (
    <div className="mt-5 mx-3">
      <div
        className="card border-top-0 border-end-0 border-start-0  text-center h-100 d-flex flex-column  mx-auto justify-content-between "
        style={{ width: "250px" }}
      >
        <img src={props.productPic || defaultProductPic} alt="ProductPic " />
        <div className=" my-0 py-0 ">
          <h4 className="text-center ">{props.brand}</h4>
          <div>
            <div
              className="bg-primary m-auto mt-3 w-75"
              style={{ height: "1px" }}
            ></div>
            <p className="fs-6 text  mt-3"> {props.productName}</p>
            <h6>฿ {props.price}</h6>
            <Link to="/AddCart">
              <i className="bi bi-bag ms-2  fs-3"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
