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

function LoginForm() {
  return (
    <div class="register-login-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="login-form">
              <h2>Login</h2>
              <form action="#">
                <div class="group-input">
                  <label for="username">Username or email address *</label>
                  <input type="text" id="username" />
                </div>
                <div class="group-input">
                  <label for="pass">Password *</label>
                  <input type="text" id="pass" />
                </div>
                <div class="group-input gi-check">
                  <div class="gi-more">
                    <label for="save-pass">
                      Save Password
                      <input type="checkbox" id="save-pass" />
                      <span class="checkmark"></span>
                    </label>
                    <a href="#" class="forget-pass">
                      Forget your Password
                    </a>
                  </div>
                </div>
                <button type="submit" class="site-btn login-btn">
                  Sign In
                </button>
              </form>
              <div class="switch-login">
                <Link to="/register" class="or-login">
                  Or Create An Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
