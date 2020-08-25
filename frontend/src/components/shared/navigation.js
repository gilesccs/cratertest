import React from "react";

// Router imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Page imports
import Homepage from "../../pages/homepage/homepage";
import Product from "../../pages/homepage/product";
import Shop from "../../pages/homepage/shop";

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
        <Route path="/">
          <Homepage></Homepage>
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
