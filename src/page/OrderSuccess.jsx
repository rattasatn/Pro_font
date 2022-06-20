import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div>
      <div className="container my-5 vh-100">
        <div>
          <h1 className=" text-center ">SUCCESS</h1>
          <div className="text-center ">
            <Link to="/">BACK TO HOME</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
