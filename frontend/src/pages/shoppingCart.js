import React from "react";

// Header/Footer imports
import Header from "../components/shared/header";
import Search from "../components/shared/search";
import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

// Homepage specific imports
import Cart from "../components/shoppingCart/cart"

function ShoppingCart() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <NavBar></NavBar>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
}

export default ShoppingCart;
