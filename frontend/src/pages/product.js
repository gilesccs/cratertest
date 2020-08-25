import React from "react";

// Header/Footer imports
import Header from "../components/shared/header";
import Search from "../components/shared/search";
import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

function Product() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  );
}

export default Product;
