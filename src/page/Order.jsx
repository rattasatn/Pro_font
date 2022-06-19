import axios from "../config/axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import qrPic from "../images/qr.jpg";
import { useNavigate } from "react-router-dom";

function Order() {
  const { cart, getCart, total } = useCart();
  const [slip, setSlip] = useState(null);
  const [statusPay, setStatusPay] = useState("PENDING");
  const [dataOrder, setDataOrder] = useState([]);
  const [orderId, setOrderId] = useState(" ");
  const navigate = useNavigate();

  console.log(cart);
  useEffect(() => {
    const fetchData = async () => {
      try {
        getCart();
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleOrder = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("totalPrice", total);
      formData.append("statusPay", statusPay);
      formData.append("slip", slip);
      const res = await axios.post("/order/", formData);

      const body = cart.reduce((acc, cur) => {
        acc.push({
          amount: cur.amount,
          orderId: res.data.order.id,
          productId: cur.productId,
          price: cur.Product.price,
        });
        return acc;
      }, []);
      await axios.post("/order/orderItem/", body);

      navigate("/OrderSuccess");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("/order/getOrder");
      setDataOrder(res.data.order);
      console.log(res.data.order);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container my-5">
        <div className="row gap-5">
          <div className="col  border border-dark rounded">
            {cart?.map((el) => (
              <div>
                <div className="d-flex justify-content-between mt-5">
                  <p className="ms-3">{el.Product.productName}</p>
                  <p> ฿ {el.Product.price * el.amount} </p>
                </div>
              </div>
            ))}
            <div>
              <div
                className="bg-primary m-auto mt-3  "
                style={{ width: "400px", height: "1px" }}
              ></div>
              <div className="d-flex justify-content-between mt-3 mb-5">
                <h4 className="ms-3">Total Pice</h4>
                <h4> ฿ {total} </h4>
              </div>
            </div>
          </div>
          <div className="col border border-dark rounded">
            <h1 className="text-center mt-4"> SCAN TO PAY</h1>

            <div
              className="bg-primary m-auto mt-3  "
              style={{ width: "250px", height: "1px" }}
            ></div>
            <img
              src={qrPic}
              className="img-thumbnail mx-auto d-block mt-5"
              alt="qrPic"
              style={{ width: "200px" }}
            ></img>
            <p className="text-center mt-4"> Account : Rattasat Naemkhunthod</p>
            <h1 className="text-center mt-4"> Upload Slip </h1>
            <div
              className="bg-primary m-auto mt-3  "
              style={{ width: "200px", height: "1px" }}
            ></div>
            <input
              type="file"
              className="border border-secondary border-1 p-5 mx-auto d-block my-5"
              onChange={(e) => setSlip(e.target.files[0])}
            />
            <div className="d-flex justify-content-center mb-5">
              <Button className="primary " onClick={handleOrder}>
                CONFIRM
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
