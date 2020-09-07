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

export default class Hero extends React.Component {
  render() {
    return (
      <div>
        {/* <div class="home-container"> */}
        <OwlCarousel
          items={1}
          autoplay={true}
          nav={true}
          center={true}
          loop={true}
          navText={[
            `<div class="home_slider_nav home_slider_prev trans_200"><div class=" d-flex flex-column align-items-center justify-content-center"><img src=${require("../../img/icons/prev.png")} alt=""/></div></div>`,
            `<div class="home_slider_nav home_slider_next trans_200"><div class=" d-flex flex-column align-items-center justify-content-center"><img src=${require("../../img/icons/next.png")} alt=""/></div></div>`,
          ]}
          class="owl-carousel owl-theme home_slider"
        >
          <div>
            <img className="img" src={require("../../img/hero-1.jpg")} />
            <div class="home_content_container">
              <div class="home_content">
                <div class="home_discount d-flex flex-row align-items-end justify-content-start">
                  <div class="home_discount_num">20</div>
                  <div class="home_discount_text">Discount on the</div>
                </div>
                <br></br>
                <br></br>
                <div class="home_title">New Collection</div>
                <br></br>
                <br></br>
                <div class="button button_1 home_button trans_200">
                  <a href="categories.html">Shop NOW!</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="img" src={require("../../img/hero-2.jpg")} />
            <div class="home_content_container">
              <div class="home_content">
                <div class="home_discount d-flex flex-row align-items-end justify-content-start">
                  <div class="home_discount_num">20</div>
                  <div class="home_discount_text">Discount on the</div>
                </div>
                <br></br>
                <br></br>
                <div class="home_title">New Collection</div>
                <br></br>
                <br></br>
                <div class="button button_1 home_button trans_200">
                  <a href="categories.html">Shop NOW!</a>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
        {/* </div> */}
      </div>
    );
  }
}
