import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import productPic from "../../images/cds85500525-2_1.webp";
import axios from "../../config/axios";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

function MyCart({ handleClose, show, fetchModal, fetchModal2 }) {
  const { id } = useParams();

  const { customer } = useAuth();
  const { cart, getCart, total } = useCart();
  const [fetch, setFetch] = useState(false);

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
  }, [fetch, fetchModal, fetchModal2]);

  const handDelete = async (id) => {
    await axios.delete(`/cart/deleteCart/${id}`);
    console.log("deleted");
    setFetch((p) => !p);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>
              CART<i className="bi bi-bag ms-3"></i>
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart?.map((el) => (
            <div className="d-flex  justify-content-evenly">
              <img
                src={el.Product.productPic}
                className="w-25"
                alt="productPic"
              />

              <div className="align-items-center ms-3">
                <div className="d-flex">
                  <h2>AMOUNT :{el.amount}</h2>
                  <Button onClick={() => handDelete(el.id)} className="ms-5 ">
                    CANCEL
                  </Button>
                </div>
                <p>SUB TOTAL : {el.Product.price * el.amount}</p>
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <div>
            <p className="text-end">TOTAL : {total}</p>
            <div>
              <Button variant="primary" onClick={handleClose} className="mx-3">
                SHOP MORE
              </Button>
              <Link className="btn btn-primary" to="/Sipping">
                CONFIRM
              </Link>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyCart;
