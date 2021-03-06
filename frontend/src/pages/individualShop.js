import React from "react";

// Header/Footer imports
import Header from "../components/shared/header";
import Search from "../components/shared/search";
import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

// Homepage specific imports
// Page specific imports
import BreadCrumb from "../components/shared/breadcrumb";
import Hero from "../components/individualShop/hero";
import Box from "../components/individualShop/box";
import Category from "../components/individualShop/category";
import Product from "../components/individualShop/product";
import IndividualShop from "../components/individualShop/individualShop"


function IndividualShopPage() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <NavBar></NavBar>
      <IndividualShop></IndividualShop>
      <Footer></Footer>
    </div>
  );
}

export default IndividualShopPage;
