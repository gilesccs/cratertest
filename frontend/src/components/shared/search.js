import React from "react";
import "./../../css/bootstrap.min.css";
import "./../../css/font-awesome.min.css";
import "./../../css/themify-icons.css";
import "./../../css/elegant-icons.css";
// import './../../css/owl.carousel.min.css';
import "./../../css/nice-select.css";
// import './../../css/jquery-ui.min.css';
import "./../../css/slicknav.min.css";
import "./../../css/style.css";

// To change:
// Links, img links
import { Link } from "react-router-dom";

function showCategories() {}

function Search() {
  return (
    <div class="container">
      <div class="inner-header">
        <div class="row">
          <div class="col-lg-2 col-md-2">
            <div class="logo">
              <a href="./index.html">
                <img src={require("../../img/logo.png")} alt="" />
              </a>
            </div>
          </div>
          <div class="col-lg-7 col-md-7">
            <div class="advanced-search">
              {/* <button
                type="button"
                class="category-btn"
                id="categorySearch"
                onClick="showCategories()"
              >
                All Categories
              </button> */}
              <select class="category-btn">
                <option value="all">All</option>
                <option value="shops">Shops</option>
                <option value="products">Products</option>
              </select>
              <div class="input-group">
                <input type="text" placeholder="What do you need?" />
                <button type="button">
                  <i class="ti-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-right col-md-3">
            <ul class="nav-right">
              {/* <li class="heart-icon">
                <a href="#">
                  <i class="icon_heart_alt"></i>
                  <span>1</span>
                </a>
              </li> */}
              <li class="cart-price">Shopping Cart</li>
              
              <li class="cart-icon">
                <a href="#">
                  <i class="icon_bag_alt"></i>
                  <span>3</span>
                </a>
                <div class="cart-hover">
                  <div class="select-items">
                    <table>
                      <tbody>
                        <tr>
                          <td class="si-pic">
                            <img
                              src={require("../../img/select-product-1.jpg")}
                              alt=""
                            />
                          </td>
                          <td class="si-text">
                            <div class="product-selected">
                              <p>$60.00 x 1</p>
                              <h6>Kabino Bedside Table</h6>
                            </div>
                          </td>
                          <td class="si-close">
                            <i class="ti-close"></i>
                          </td>
                        </tr>
                        <tr>
                          <td class="si-pic">
                            <img
                              src={require("../../img/select-product-2.jpg")}
                              alt=""
                            />
                          </td>
                          <td class="si-text">
                            <div class="product-selected">
                              <p>$60.00 x 1</p>
                              <h6>Kabino Bedside Table</h6>
                            </div>
                          </td>
                          <td class="si-close">
                            <i class="ti-close"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="select-button">
                    <Link to="/shoppingCart" class="primary-btn view-card">
                      VIEW CART
                    </Link>
                    <Link to="/checkout" class="primary-btn checkout-btn">
                      CHECK OUT
                    </Link>
                  </div>
                </div>
              </li>
              {/* <li class="cart-price">$150.00</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
