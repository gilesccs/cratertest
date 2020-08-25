import React from "react";

// Header/Footer imports
import Header from "../components/shared/header";
import Search from "../components/shared/search";
import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

// Page specific imports
import Breadcrumb from "../components/shop/breadcrumb";

function Shop() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <NavBar></NavBar>
      <Breadcrumb></Breadcrumb>
      <Footer></Footer>
    </div>
  );
}

export default Shop;
