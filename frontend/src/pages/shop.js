import React from "react";

// Header/Footer imports
import Header from "../components/shared/header";
import Search from "../components/shared/search";
import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

// Page specific imports
import BreadCrumb from "../components/shop/breadcrumb";
import ProductShop from "../components/shop/productShop";

function Shop() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <NavBar></NavBar>
      <BreadCrumb></BreadCrumb>
      <ProductShop></ProductShop>
      <Footer></Footer>
    </div>
  );
}

export default Shop;
