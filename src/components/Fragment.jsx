import React from "react";
import Header from "./Header";
import Hotels from "./Hotels";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Homepage from "./Homepage";
import CheckoutPage from "./CheckoutPage";

export default function Fragments(){
    return (
        <Routes>
           <Route path="/" element={<Homepage/>}/> 
           <Route path="/login-page" element={<LoginPage/>}/>
           <Route path="/checkout-page" element={<CheckoutPage/>}/>
        </Routes>
    )
}