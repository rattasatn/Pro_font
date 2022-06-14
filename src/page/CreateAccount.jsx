import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ErrorContext } from "../context/ErrorContext";

function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await signUp({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        address,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="bg-primary  h-100 p-5 ">
      <div className="border  bg-white  rounded-3 p-5 ">
        <Link to="/" className="text-decoration-none">
          <h1 className=" text-center  mt-2">CREATE AN ACCOUNT</h1>
          <div
            className="bg-primary m-auto mt-3 "
            style={{ width: "400px", height: "1px" }}
          ></div>
        </Link>
        <form
          className="mt-5  m-auto"
          style={{ width: "600px" }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3 row">
            <label htmlFor="firstName" className="col-4 col-form-label fw-bold">
              FIRST NAME :
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="lastName" className="col-4 col-form-label fw-bold">
              LAST NAME :
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phoneNumber}
                onChange={(e) => setPoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="password"
              className="col-4 col-form-label fw-bold fw-bold"
            >
              PASSWORD :
            </label>
            <div className="col">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="confirmPassword"
              className="col-4 col-form-label fw-bold"
            >
              CONFIRM PASSWORD :
            </label>
            <div className="col">
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-dark text-white ">
              CREATE AN ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
