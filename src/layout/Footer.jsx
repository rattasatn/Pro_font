import React from "react";

function Footer() {
  return (
    <div className="bg-dark">
      <div className="d-flex justify-content-start ms-5 ">
        <div>
          <h3 className="text-white ">SHIPPING</h3>
          <i className="bi bi-truck text-white fs-1 text "></i>
        </div>
        <div className="text-white ms-3 mt-2">
          <p>FREE SHIPPING</p>
          <p>3-5 Working days in Bangkok,</p>
          <p>4-6 Working days in Upcountry.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
