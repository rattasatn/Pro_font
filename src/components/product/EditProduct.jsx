import React, { useContext, useEffect, useState } from "react";
import axios from "../../config/axios";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");

  const [quantity, setQuantity] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/product/productId/${id}`);
      setProductName(res.data.product.productName);
      console.log(res.data);
    };
    fetchData();
  }, []);
  //
  const handleEdit = async (e) => {
    try {
      const res = await axios.put(`/product/updateProduct/${id}`, {
        productName,
        brand,
        price,
        quantity,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mt-5">
      <div className="">
        <h1 className=" text-center  mt-2">EDIT PRODUCT</h1>
        <div
          className="bg-primary m-auto mt-3 "
          style={{ width: "400px", height: "1px" }}
        ></div>

        <form className="mt-5  m-auto mb-5" style={{ width: "600px" }}>
          <div className="mb-3 row">
            <label htmlFor="firstName" className="col-4 col-form-label fw-bold">
              BRAND :
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control "
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="firstName"
                className="col-4 col-form-label fw-bold"
              >
                PRODUCT NAME :
              </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="firstName"
                  className="col-4 col-form-label fw-bold"
                >
                  PRICE :
                </label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control "
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="firstName"
                  className="col-4 col-form-label fw-bold"
                >
                  QUANTITY :
                </label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control "
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <button className="btn btn-dark mt-3" onClick={handleEdit}>
          SAVE
        </button>
      </div>
    </div>
  );
}

export default EditProduct;
