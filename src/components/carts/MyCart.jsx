import React from "react";
import { Modal, Button } from "react-bootstrap";
import productPic from "../../images/cds85500525-2_1.webp";
function MyCart({ handleClose, show }) {
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
          <div className="d-flex  justify-content-evenly">
            <img src={productPic} className="w-25" alt="productPic" />

            <div className="align-items-center ms-3">
              <div className="d-flex">
                <h2>AMOUNT : 5</h2>
                <Button className="ms-5 ">CANCEL</Button>
              </div>
              <p>SUB TOTAL : ฿22,154</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <p className="text-end">TOTAL : ฿22,154</p>
            <div>
              <Button variant="primary" onClick={handleClose} className="mx-3">
                SHOP MORE
              </Button>
              <Button variant="primary" onClick={handleClose}>
                CONFIRM
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyCart;
