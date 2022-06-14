import React, { useState } from "react";
import productPic from "../../images/cds85500525-2_1.webp";
import MyCart from "./MyCart";
function AddToCart() {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-end">
          <img src={productPic} className="w-50" alt="productPic" />
        </div>
        <div className="w-50 flex align-left">
          <h1>BRAND</h1>
          <p>product name</p>
          <h5>฿ 4,900</h5>
          <div className="d-flex align-items-center mt-5">
            <i className="bi bi-dash-square " onClick={decrease}></i>
            <h3 className="mx-3 counter__output "> {counter} </h3>
            <i className="bi bi-plus-square" onClick={increase}></i>
          </div>
          <button onClick={handleShow} className="btn btn-dark mt-3">
            ADD TO CART
          </button>
        </div>
      </div>
      <MyCart handleClose={handleClose} handleShow={handleShow} show={show} />
    </div>
  );
}

export default AddToCart;
