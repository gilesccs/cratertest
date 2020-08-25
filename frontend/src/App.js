import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import Product from "./pages/homepage/product";

// Router imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navigation from "../src/components/shared/navigation";

function App() {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <Link to="/product">Products</Link>
    //     </nav>
    //   </div>
    //   <div>
    //     <nav>
    //       <Link to="/">Home</Link>
    //     </nav>
    //   </div>
    //   {/* <div>
    //     <Homepage></Homepage>
    //   </div> */}
    //   <Switch>
    //     <Route path="/product">
    //       <Product></Product>
    //     </Route>
    //     <Route path="/">
    //       <Homepage></Homepage>
    //     </Route>
    //   </Switch>
    // </Router>
    <Navigation></Navigation>
  );
}

export default App;
