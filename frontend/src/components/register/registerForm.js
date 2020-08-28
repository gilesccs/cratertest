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

function RegisterForm() {
  return (
    <div class="register-login-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="register-form">
              <h2>Register</h2>
              <form action="#">
                <div class="group-input">
                  <label for="username">Username or email address *</label>
                  <input type="text" id="username" />
                </div>
                <div class="group-input">
                  <label for="pass">Password *</label>
                  <input type="text" id="pass" />
                </div>
                <div class="group-input">
                  <label for="con-pass">Confirm Password *</label>
                  <input type="text" id="con-pass" />
                </div>
                <button type="submit" class="site-btn register-btn">
                  REGISTER
                </button>
              </form>
              <div class="switch-login">
                <Link to="/login" class="or-login">
                  Or Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
