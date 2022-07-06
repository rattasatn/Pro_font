import React from "react";
import logo from "../images/ArtistLogo1.png";
import { useState, useContext } from "react";
import { AuthContext, useAuth } from "../context/AuthContext";
import { ErrorContext } from "../context/ErrorContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await login(email, password);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="bg-primary  h-100 pb-5 ">
      <Link to="/" className="d-flex justify-content-center">
        <img src={logo} alt="logo" className="rounded-circle w-25 mt-5" />
      </Link>

      <div className="d-flex justify-content-center">
        <h1 className="fs-1 text-white mt-3">sign in</h1>
      </div>
      <div className="d-flex justify-content-center w-3 ">
        <form style={{ width: "400px" }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label text-white">
              Email
            </label>
            <input
              type="email"
              className="form-control  input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control input"
              value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between">
            <Link
              to="/createAccount"
              className="text-decoration-underline text-white"
            >
              Create new account
            </Link>
            <button type="submit" className="btn btn-dark text-white">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
