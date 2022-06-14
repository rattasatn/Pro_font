import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../page/Login";
import CreateAccount from "../page/CreateAccount";

import HomePage from "../page/HomePage";
import Layout from "../layout/Layout";
import ForMen from "../page/ForMen";
import ForWomen from "../page/ForWomen";
import Favorite from "../page/Favorite";
import MyAccount from "../page/MyAccount";
import AddCart from "../page/AddCart";
import AddProduct from "../components/product/AddProduct";
import AllProduct from "../components/product/AllProduct";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/ForMen" element={<ForMen />} />
        <Route path="/ForWomen" element={<ForWomen />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/MyAccount" element={<MyAccount />} />

        <Route path="/AddCart" element={<AddCart />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/AllProduct" element={<AllProduct />} />
      <Route path="/createAccount" element={<CreateAccount />} />
    </Routes>
  );
}

export default Router;
