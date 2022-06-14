import axios from "../config/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyAccount() {
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
      <Link to="/" className="text-decoration-none">
        <h1 className=" text-center  mt-2">MY ACCOUNT</h1>
      </Link>
      <div
        className="bg-primary m-auto mt-3 "
        style={{ width: "300px", height: "1px" }}
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
          <label htmlFor="phoneNumber" className="col-4 col-form-label fw-bold">
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
            {edit ? "SAVE" : "EDIT ACCOUNT"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyAccount;
