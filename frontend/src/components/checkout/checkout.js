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

// Owl Carousel imports
// import $ from 'jQuery';
import OwlCarousel from "react-owl-carousel";
// import 'owl.carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/owl.carousel.min.js";
// import './../../css/owl.carousel.min.css';

export default class Checkout extends React.Component {
  render() {
    return (
      <section class="checkout-section spad">
        <div class="container">
          <form action="#" class="checkout-form">
            <div class="row">
              <div class="col-lg-6">
                <div class="checkout-content">
                  <Link to="/login" class="content-btn">
                    Click Here To Login
                  </Link>
                </div>
                <h4>Biiling Details</h4>
                <div class="row">
                  <div class="col-lg-6">
                    <label for="fir">
                      First Name<span>*</span>
                    </label>
                    <input type="text" id="fir" />
                  </div>
                  <div class="col-lg-6">
                    <label for="last">
                      Last Name<span>*</span>
                    </label>
                    <input type="text" id="last" />
                  </div>
                  <div class="col-lg-12">
                    <label for="cun-name">Company Name</label>
                    <input type="text" id="cun-name" />
                  </div>
                  <div class="col-lg-12">
                    <label for="cun">
                      Country<span>*</span>
                    </label>
                    <input type="text" id="cun" />
                  </div>
                  <div class="col-lg-12">
                    <label for="street">
                      Street Address<span>*</span>
                    </label>
                    <input type="text" id="street" class="street-first" />
                    <input type="text" />
                  </div>
                  <div class="col-lg-12">
                    <label for="zip">Postcode / ZIP (optional)</label>
                    <input type="text" id="zip" />
                  </div>
                  <div class="col-lg-12">
                    <label for="town">
                      Town / City<span>*</span>
                    </label>
                    <input type="text" id="town" />
                  </div>
                  <div class="col-lg-6">
                    <label for="email">
                      Email Address<span>*</span>
                    </label>
                    <input type="text" id="email" />
                  </div>
                  <div class="col-lg-6">
                    <label for="phone">
                      Phone<span>*</span>
                    </label>
                    <input type="text" id="phone" />
                  </div>
                  <div class="col-lg-12">
                    <div class="create-item">
                      <label for="acc-create">
                        Create an account?
                        <input type="checkbox" id="acc-create" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="checkout-content">
                  <input type="text" placeholder="Enter Your Coupon Code" />
                </div>
                <div class="place-order">
                  <h4>Your Order</h4>
                  <div class="order-total">
                    <ul class="order-table">
                      <li>
                        Product <span>Total</span>
                      </li>
                      <li class="fw-normal">
                        Combination x 1 <span>$60.00</span>
                      </li>
                      <li class="fw-normal">
                        Combination x 1 <span>$60.00</span>
                      </li>
                      <li class="fw-normal">
                        Combination x 1 <span>$120.00</span>
                      </li>
                      <li class="fw-normal">
                        Subtotal <span>$240.00</span>
                      </li>
                      <li class="total-price">
                        Total <span>$240.00</span>
                      </li>
                    </ul>
                    <div class="payment-check">
                      <div class="pc-item">
                        <label for="pc-check">
                          Cheque Payment
                          <input type="checkbox" id="pc-check" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="pc-item">
                        <label for="pc-paypal">
                          Paypal
                          <input type="checkbox" id="pc-paypal" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="order-btn">
                      <button type="submit" class="site-btn place-btn">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
