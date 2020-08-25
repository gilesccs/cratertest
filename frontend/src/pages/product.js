import React from "react";

// Header/Footer imports
import Header from "../components/shared/header";
import Search from "../components/shared/search";
import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

// Specific imports
import BreadCrumb from "../components/product/breadcrumb";
import ProductShop from "../components/product/productShop";
import RelatedProducts from "../components/product/relatedProducts"

function Product() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <NavBar></NavBar>
      <BreadCrumb></BreadCrumb>
      <ProductShop></ProductShop>
      <RelatedProducts></RelatedProducts>
      <Footer></Footer>
    </div>
  );
}

export default Product;
