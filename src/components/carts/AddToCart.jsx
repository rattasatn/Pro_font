import React, { useContext, useState } from "react";
import { useEffect } from "react";

import MyCart from "./MyCart";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function AddToCart() {
  const [show, setShow] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [fetchModal, setFetchModal] = useState(false);

  const [amount, setAmount] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const [data, setData] = useState({});
  const { customer } = useAuth();

  console.log(customer);
  console.log("data");
  console.log(data.product?.brand);
  const productId = id;
  const customerId = customer?.id;

  console.log(customerId);

  const handleOnClick = async () => {
    console.log("first");
    if (
      amount <= 0 ||
      amount === undefined ||
      amount === null ||
      amount === "" ||
      amount === NaN
    ) {
      return alert("Please enter amount");
    }
    await axios.post(`/cart`, { amount, productId, customerId });
    const res = await axios.get(`/product/productId/${id}`);
    setData(res.data);
    setFetchModal((p) => !p);

    console.log("first");
    handleShow();
    setFetch((p) => !p);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(id);
        const res = await axios.get(`/product/productId/${id}`);
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [fetch]);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-end">
          <img
            src={data.product?.productPic}
            className="w-50"
            alt="productPic"
          />
        </div>
        <div className="w-50 flex align-left">
          <h1>{data.product?.brand}</h1>
          <p>{data.product?.productName}</p>
          <h5>{data.product?.price}</h5>
          <div className="d-flex align-items-center mt-5">
            <i
              className="bi bi-dash-square "
              onClick={() => {
                if (amount === 0) {
                  setAmount(+amount);
                } else {
                  setAmount(amount - 1);
                }
              }}
            ></i>
            <input
              type="text"
              onChange={(e) => setAmount(+e.target.value)}
              value={+amount}
            />
            <i
              className="bi bi-plus-square"
              onClick={() => {
                setAmount(+amount + 1);
              }}
            ></i>
          </div>

          <button onClick={() => handleOnClick()} className="btn btn-dark mt-3">
            ADD TO CART
          </button>
        </div>
      </div>
      <MyCart
        handleClose={handleClose}
        handleShow={handleShow}
        fetchModal={fetchModal}
        show={show}
      />
    </div>
  );
}

export default AddToCart;
