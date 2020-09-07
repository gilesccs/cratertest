import React from "react";
import "./../../css/bootstrap.min.css";
import "./../../css/font-awesome.min.css";
import './../../css/themify-icons.css';
import './../../css/elegant-icons.css';
// import './../../css/owl.carousel.min.css';
import "./../../css/nice-select.css";
// import './../../css/jquery-ui.min.css';
import "./../../css/slicknav.min.css";
import "./../../css/style.css";

import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="ht-left">
              <div className="mail-service">
                <i className=" fa fa-envelope"></i>
                hello.colorlib@gmail.com
              </div>
              <div className="phone-service">
                <i className=" fa fa-phone"></i>
                +65 11.188.888
              </div>
            </div>
            <div className="ht-right">
              <Link to="/login" className="login-panel">
                <i className="fa fa-user"></i>Login
              </Link>
              <div className="top-social">
                <a href="#">
                  <i className="ti-instagram"></i>
                </a>
                {/* <a href="#">
                  <i className="ti-twitter-alt"></i>
                </a>
                <a href="#">
                  <i className="ti-linkedin"></i>
                </a>
                <a href="#">
                  <i className="ti-pinterest"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
