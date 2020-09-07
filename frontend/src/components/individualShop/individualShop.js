import React from "react";

// CSS Imports

import "./../../css/bootstrap.min.css";
import "./../../css/font-awesome.min.css";
import "./../../css/themify-icons.css";
import "./../../css/elegant-icons.css";
// import './../../css/owl.carousel.min.css';
import "./../../css/nice-select.css";
// import './../../css/jquery-ui.min.css';
import "./../../css/slicknav.min.css";
import "./../../css/style.css";

// Link imports
// import Navigation from "../shared/navigation";
import { Link } from "react-router-dom";

// Component imports
import Hero from "./hero";
import Box from "./box";
import Category from "./category";
import Product from "./product copy";

export default class IndividualShop extends React.Component {
  render() {
    return (
      <section class="product-shop spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <img src={require("../../img/products/product-2.jpg")} />
            </div>
            <div
              style={{
                flex: 1,
                display: "inline-block",
                verticalAlign: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  // display: "inline-block",
                  paddingLeft: "20px",
                  // flex: 1,
                  verticalAlign: "center",
                }}
              >
                <h1>Shop Name</h1>
                <Box></Box>
                <Category></Category>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
              <div class="filter-widget">
                <h4 class="fw-title">Shop Description:</h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eget lorem lobortis, tincidunt libero vitae, efficitur purus.
              </div>

              <div class="filter-widget">
                <h4 class="fw-title">Tags</h4>
                <div class="fw-tags">
                  <a href="#">Towel</a>
                  <a href="#">Shoes</a>
                  <a href="#">Coat</a>
                  <a href="#">Dresses</a>
                  <a href="#">Trousers</a>
                  <a href="#">Men's hats</a>
                  <a href="#">Backpack</a>
                </div>
              </div>
            </div>
            <div class="col-lg-9 order-1 order-lg-2">
              <Product></Product>

              <div class="loading-more">
                <i class="icon_loading"></i>
                <a href="#">Loading More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
