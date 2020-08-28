import React from "react";

// Router imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Page imports
import Homepage from "../../pages/homepage";
import Product from "../../pages/product";
import Shop from "../../pages/shop";
import Login from "../../pages/login";
import Register from "../../pages/register";
import ShoppingCart from "../../pages/shoppingCart";
import CheckOutPage from "../../pages/checkoutPage";
import IndividualShopPage from "../../pages/individualShop";

function Navigation() {
  return (
    <Router>
      <Switch>
        <Route path="/product">
          <Product></Product>
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/shoppingCart">
          <ShoppingCart></ShoppingCart>
        </Route>
        <Route path="/checkout">
          <CheckOutPage></CheckOutPage>
        </Route>
        <Route path="/individualshop">
          <IndividualShopPage></IndividualShopPage>
        </Route>
        <Route path="/">
          <Homepage></Homepage>
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
