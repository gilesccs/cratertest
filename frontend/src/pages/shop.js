import React from "react";

// Header/Footer imports
import Header from "../components/shared/header";
import Search from "../components/shared/search";
import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

// Page specific imports
import BreadCrumb from "../components/shared/breadcrumb";
import shopCollection from "../components/shop/shopCollection";
import ShopCollection from "../components/shop/shopCollection";

function Shop() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <NavBar></NavBar>
      <BreadCrumb></BreadCrumb>
      <ShopCollection></ShopCollection>
      <Footer></Footer>
    </div>
  );
}

export default Shop;
