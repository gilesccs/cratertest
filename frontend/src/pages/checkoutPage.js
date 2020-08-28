import React from "react";

// Header/Footer imports
import Header from "../components/shared/header";
import Search from "../components/shared/search";
import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

// Homepage specific imports
import CheckOut from "../components/checkout/checkout";

function CheckOutPage() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <NavBar></NavBar>
      <CheckOut></CheckOut>
      <Footer></Footer>
    </div>
  );
}

export default CheckOutPage;
