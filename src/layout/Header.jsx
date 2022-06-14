import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyCart from "../components/carts/MyCart";
import logo from "../images/logo.png";
import { useAuth } from "../context/AuthContext";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { customer, logout } = useAuth();

  return (
    <div>
      <div className="d-flex justify-content-between  py-2   shadow  ">
        <ul className="nav nav-pills align-items-center ms-5  ">
          <li className="nav-item">
            <Link
              className="nav-link btn btn-primary"
              aria-current="page"
              to=""
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-primary" to="/ForMen">
              Men
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-primary " to="ForWomen">
              Women
            </Link>
          </li>
        </ul>
        <div className="d-flex justify-content-center ">
          <img src={logo} alt="logo" style={{ width: "150px" }} />
        </div>

        <ul className="nav nav-pills d-flex justify-content-end align-items-center me-5">
          <li className="nav-item ">
            <Link className="nav-link btn btn-primary" to="MyAccount">
              ACCOUNT |
            </Link>
          </li>
          <li className="nav-item ">
            {customer ? (
              <button
                className="nav-link btn btn-primary  d-flex justify-content-end align-items-center "
                onClick={logout}
              >
                SIGN OUT
                <i className="bi bi-person ms-2 fs-3"></i>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-primary d-flex justify-content-end align-items-center "
                    onClick={handleShow}
                  >
                    CART <i className="bi bi-bag ms-2  fs-3"></i>
                  </button>
                </li>
                <MyCart
                  handleClose={handleClose}
                  handleShow={handleShow}
                  show={show}
                />
              </button>
            ) : (
              <Link
                className="nav-link btn btn-primary  d-flex justify-content-end align-items-center"
                to="login"
              >
                SIGN IN
                <i className="bi bi-person ms-2 fs-3"></i>
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <input
          type="text"
          className="form-control rounded-pill me-3 border-dark"
          id="search"
          style={{ width: "250px", height: "25px" }}
        />
        <i className="bi bi-search fs-5 me-3"></i>
        <Link
          className="bi bi-heart-fill fs-5 text-danger me-5"
          to="Favorite"
        ></Link>
      </div>
    </div>
  );
}

export default Header;
