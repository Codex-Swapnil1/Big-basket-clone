import React from "react";
import { Route, Routes } from "react-router-dom";
// import { SingleProduct } from "../Components/productPages/SingleProduct";
import { Error } from "../Components/Header & Footer/Header/HeaderElement";
import ProductAssemble from "../Components/Product_page/ProductAssemble"
// import { Checkout } from "../Pages/Checkout";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/Login & Signup/Login/Login";
import { Wallet } from "../Components/wallet&payments/wallet";
import {Recharge} from "../Components/wallet&payments/recharge"

export const Routers = () => {
  return (
    <>
      <Routes>
          
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />} />
        <Route path="/big-basket" element={<Home />} />
        <Route path="/cl/:category" element={<ProductAssemble/>} />
        <Route path="/cl/*" element={<Error>404 Not Found</Error>} />
        {/* <Route path="/:id" element={<SingleProduct />} /> */}
        {/* <Route path="/cl/:category/:id" element={<SingleProduct />} /> */}
        <Route path="/cl/:category/*" element={<Error>404 Not Found</Error>} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/*" element={<Error>404 Not Found</Error>} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="/recharge" element={<Recharge/>}/>
      </Routes>
    </>
  );
};
