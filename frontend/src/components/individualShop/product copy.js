import React from "react";

// Owl Carousel imports
// import $ from 'jQuery';
import OwlCarousel from "react-owl-carousel";
// import 'owl.carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import './../../img/css/owl.carousel.min.css';

// // CSS Imports for individual shop page
// import "./../../img/css/individualShop/main_styles.css";
// import "./../../img/css/individualShop/product.css";
// import "./../../img/css/individualShop/product_responsive.css";
// import "./../../img/css/individualShop/responsive.css";

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
import Navigation from "../shared/navigation";
import { Link } from "react-router-dom";

// CSS Imports
require.context("./../../css/individualShop/");

export default class Product extends React.Component {
  render() {
    return (
      <div class="product-list">
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src={require("../../img/products/product-1.jpg")} alt="" />
                <div class="sale pp-sale">Sale</div>
                <div class="icon">
                  <i class="icon_heart_alt"></i>
                </div>
                <ul>
                  <li class="w-icon active">
                    <a href="#">
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <Link to="/individualshop">+ Quick View</Link>
                  </li>
                  <li class="w-icon">
                    <a href="#">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <a href="#">
                  <h5>Pure Pineapple</h5>
                </a>
                <div class="product-price">
                  $14.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src={require("../../img/products/product-2.jpg")} alt="" />
                <div class="icon">
                  <i class="icon_heart_alt"></i>
                </div>
                <ul>
                  <li class="w-icon active">
                    <a href="#">
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <Link to="/individualshop">+ Quick View</Link>
                  </li>
                  <li class="w-icon">
                    <a href="#">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Coat</div>
                <a href="#">
                  <h5>Guangzhou sweater</h5>
                </a>
                <div class="product-price">
                  $13.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src={require("../../img/products/product-3.jpg")} alt="" />
                <div class="icon">
                  <i class="icon_heart_alt"></i>
                </div>
                <ul>
                  <li class="w-icon active">
                    <a href="#">
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <Link to="/individualshop">+ Quick View</Link>
                  </li>
                  <li class="w-icon">
                    <a href="#">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Shoes</div>
                <a href="#">
                  <h5>Guangzhou sweater</h5>
                </a>
                <div class="product-price">
                  $34.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src={require("../../img/products/product-4.jpg")} alt="" />
                <div class="icon">
                  <i class="icon_heart_alt"></i>
                </div>
                <ul>
                  <li class="w-icon active">
                    <a href="#">
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <Link to="/individualshop">+ Quick View</Link>
                  </li>
                  <li class="w-icon">
                    <a href="#">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Coat</div>
                <a href="#">
                  <h5>Microfiber Wool Scarf</h5>
                </a>
                <div class="product-price">
                  $64.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src={require("../../img/products/product-5.jpg")} alt="" />
                <div class="icon">
                  <i class="icon_heart_alt"></i>
                </div>
                <ul>
                  <li class="w-icon active">
                    <a href="#">
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <Link to="/individualshop">+ Quick View</Link>
                  </li>
                  <li class="w-icon">
                    <a href="#">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Shoes</div>
                <a href="#">
                  <h5>Men's Painted Hat</h5>
                </a>
                <div class="product-price">
                  $44.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src={require("../../img/products/product-6.jpg")} alt="" />
                <div class="icon">
                  <i class="icon_heart_alt"></i>
                </div>
                <ul>
                  <li class="w-icon active">
                    <a href="#">
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <Link to="/individualshop">+ Quick View</Link>
                  </li>
                  <li class="w-icon">
                    <a href="#">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Shoes</div>
                <a href="#">
                  <h5>Converse Shoes</h5>
                </a>
                <div class="product-price">
                  $34.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src={require("../../img/products/product-7.jpg")} alt="" />
                <div class="sale pp-sale">Sale</div>
                <div class="icon">
                  <i class="icon_heart_alt"></i>
                </div>
                <ul>
                  <li class="w-icon active">
                    <a href="#">
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <Link to="/individualshop">+ Quick View</Link>
                  </li>
                  <li class="w-icon">
                    <a href="#">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Towel</div>
                <a href="#">
                  <h5>Pure Pineapple</h5>
                </a>
                <div class="product-price">
                  $64.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src={require("../../img/products/product-8.jpg")} alt="" />
                <div class="icon">
                  <i class="icon_heart_alt"></i>
                </div>
                <ul>
                  <li class="w-icon active">
                    <a href="#">
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <Link to="/individualshop">+ Quick View</Link>
                  </li>
                  <li class="w-icon">
                    <a href="#">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Coat</div>
                <a href="#">
                  <h5>2 Layer Windbreaker</h5>
                </a>
                <div class="product-price">
                  $44.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src={require("../../img/products/product-9.jpg")} alt="" />
                <div class="icon">
                  <i class="icon_heart_alt"></i>
                </div>
                <ul>
                  <li class="w-icon active">
                    <a href="#">
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <Link to="/individualshop">+ Quick View</Link>
                  </li>
                  <li class="w-icon">
                    <a href="#">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">Shoes</div>
                <a href="#">
                  <h5>Converse Shoes</h5>
                </a>
                <div class="product-price">
                  $34.00
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
