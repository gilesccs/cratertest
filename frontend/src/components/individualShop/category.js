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

// Owl Carousel imports
// import $ from 'jQuery';
import OwlCarousel from "react-owl-carousel";
// import 'owl.carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import './../../css/owl.carousel.min.css';

// CSS Imports for individual shop page
import "./../../css/individualShop/main_styles.css";
import "./../../css/individualShop/product.css";
import "./../../css/individualShop/product_responsive.css";
import "./../../css/individualShop/responsive.css";

// Link imports
import Navigation from "../shared/navigation";
import { Link } from "react-router-dom";

import BG from "../../img/banner-1.jpg";

export default class Category extends React.Component {
  render() {
    return (
      <div class="categories">
        <div class="section_container">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="categories_list_container">
                  <ul class="categories_list d-flex flex-row align-items-center justify-content-start">
                    <li>
                      <a href="categories.html">new arrivals</a>
                    </li>
                    <li>
                      <a href="categories.html">recommended</a>
                    </li>
                    <li>
                      <a href="categories.html">best sellers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
