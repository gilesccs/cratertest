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

export default class BreadCrumb extends React.Component {
  render() {
    return (
      <div class="breacrumb-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-text">
                <Link to="/">
                  <i class="fa fa-home"></i> Home
                </Link>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
