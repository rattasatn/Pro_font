import React, { useEffect, useState } from "react";
import defaultProductPic from "../../images/chanel.webp";
import axios from "../../config/axios";
import { Link, useParams, useLocation } from "react-router-dom";

function AllProductCard({ refreshId }) {
  const [product, setProduct] = useState([]);

  const [fetch, setFetch] = useState(false);
  const location = useLocation();
  // const [refresh,setRresh] = useState(false);

  // location.state && setFetch(!fetch);

  // useEffect(() => {
  //   console.log(location.state);
  //   const fetchData = async () => {
  //     const res = await axios.get("/product");
  //     console.log(res.data);
  //     setProduct(res.data.products);
  //   };
  //   fetchData();
  // }, [location.state]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/product");
      console.log(res.data);
      setProduct(res.data.products);
    };
    fetchData();
  }, [fetch, refreshId]);

  // const handleOnClick = async (id) => {
  //   try {
  //     console.log(id);
  //     const res = await axios.get(`/product/productId/${id}`);
  //     console.log(res.data.product.productName);
  //     handleShow();
  //     console.log(res.data);
  //     setData(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  //

  const handleDelete = async (id) => {
    await axios.delete(`/product/${id}`);
    console.log("deleted");
    setFetch(!fetch);
  };

  return product.slice(0, 30).map((el) => (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <img
          src={el.productPic || defaultProductPic}
          alt="ProductPic "
          style={{ width: "150px", height: "200px" }}
        />

        <div className="w-50  ms-5">
          <h3>{refreshId}</h3>
          <p>BRAND :{el.brand}</p>
          <p>PRODUCT NAME :{el.productName}</p>
          <p>PRICE :{el.price}</p>
          <p>QUANTITY :{el.quantity} </p>
          <div>
            <Link
              to={`/AllProduct/${el.id}`}
              type="button "
              className="btn btn-dark text-white "
            >
              EDIT
            </Link>

            <button
              className="btn btn-dark ms-3"
              onClick={() => handleDelete(el.id)}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-primary m-auto mt-3  "
        style={{ width: "1000px", height: "1px" }}
      ></div>
    </div>
  ));
}

export default AllProductCard;
