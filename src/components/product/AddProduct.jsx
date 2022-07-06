import axios from "../../config/axios";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [forGender, setForGender] = useState("");
  const [productPic, setProductPic] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("productPic", productPic);
      formData.append("productName", productName);
      formData.append("price", price);
      formData.append("brand", brand);
      formData.append("quantity", quantity);
      formData.append("forGender", forGender);
      // navigate("/AllProduct", { state: { refresh: Math.random() } });

      await axios.post("/admin", formData);
      navigate("/AllProduct");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className=" text-center  mt-5">ADD PRODUCT</h1>
      <div
        className="bg-primary m-auto mt-3 "
        style={{ width: "250px", height: "1px" }}
      ></div>
      <div className="d-flex justify-content-center mt-4 ms-5">
        <div>
          <div>
            <input
              type="file"
              className="border border-secondary border-1 p-5 m-5"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setProductPic(e.target.files[0]);
                }
              }}
            />
          </div>
        </div>
        <form className="mt-5  m-auto" style={{ width: "600px" }}>
          <div className="mb-3 row">
            <label htmlFor="firstName" className="col-4 col-form-label fw-bold">
              PRODUCT NAME :
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="lastName" className="col-4 col-form-label fw-bold">
              BRAND :
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-4 col-form-label fw-bold">
              PRICE :
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-4 col-form-label fw-bold">
              QUANTITY :
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-4 col-form-label fw-bold">
              GENDER :
            </label>
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setForGender(e.target.value)}
              >
                <option selected> SELECT GENDER</option>
                <option value="men">MEN</option>
                <option value="women">WOMEN</option>
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-dark text-white me-3  "
            >
              ADD PRODUCT
            </button>
            <Link className="btn btn-dark text-white" to="/AllProduct">
              ALL PRODUCT
            </Link>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button onClick={logout} className="btn btn-dark text-white   ">
              SIGN OUT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
