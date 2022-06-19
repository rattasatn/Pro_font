import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "../config/axios";

function Sipping() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPoneNumber] = useState("");
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/customer");
      setData(res.data.customer);
      setFirstName(res.data.customer.firstName);
      setLastName(res.data.customer.lastName);
      setEmail(res.data.customer.email);
      setAddress(res.data.customer.address);
      setPoneNumber(res.data.customer.phoneNumber);
    };
    fetchData();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    if (edit) {
      e.preventDefault();
      const res = await axios.put("/customer", {
        firstName,
        lastName,
        address,
      });
      setData(res.data.customer);
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  return (
    <div>
      <div className="container my-5 ">
        <div className="d-flex justify-content-center">
          <h1>SIPPING</h1>
          <i className="bi bi-truck  fs-1 ms-3 "></i>
        </div>
        <div
          className="bg-primary m-auto mt-3 "
          style={{ width: "250px", height: "1px" }}
        ></div>
        <form className="mt-5  m-auto mb-5" style={{ width: "600px" }}>
          <div className="mb-3 row">
            <label htmlFor="firstName" className="col-4 col-form-label fw-bold">
              FIRST NAME :
            </label>
            <div className="col">
              {edit ? (
                <input
                  type="text"
                  className="form-control "
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  className="form-control "
                  disabled
                  value={firstName}
                />
              )}
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="lastName" className="col-4 col-form-label fw-bold">
              LAST NAME :
            </label>
            <div className="col">
              {edit ? (
                <input
                  type="text"
                  className="form-control "
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  className="form-control "
                  disabled
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              )}
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-4 col-form-label fw-bold">
              E-MAIL :
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                disabled
                value={email}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="phoneNumber"
              className="col-4 col-form-label fw-bold"
            >
              PHONE NUMBER :
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                disabled
                value={phoneNumber}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label
              htmlFor="confirmPassword"
              className="col-4 col-form-label fw-bold"
            >
              ADDRESS :
            </label>
            <div className="col">
              {edit ? (
                <input
                  type="text"
                  className="form-control "
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  className="form-control "
                  disabled
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              )}
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="button"
              onClick={handleEdit}
              className="btn btn-dark text-white "
            >
              {edit ? "SAVE" : "EDIT"}
            </button>
            <Link className="btn btn-dark text-white ms-3" to="/Order">
              {" "}
              NEXT{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sipping;
