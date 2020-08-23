import React from "react";
import "./../../css/bootstrap.min.css";
import "./../../css/font-awesome.min.css";
import './../../css/themify-icons.css';
import './../../css/elegant-icons.css';
import './../../css/owl.carousel.min.css';
import "./../../css/nice-select.css";
import './../../css/jquery-ui.min.css';
import "./../../css/slicknav.min.css";
import "./../../css/style.css";

// Owl Carousel imports
// import $ from 'jQuery';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './../../css/owl.carousel.min.css';

export default class Benefits extends React.Component{
    render() {
        return (
            <div class="benefit-items">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="single-benefit">
                            <div class="sb-icon">
                                <img src={require("../../img/icon-1.png")} alt=""/>
                            </div>
                            <div class="sb-text">
                                <h6>Free Shipping</h6>
                                <p>For all order over 99$</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-benefit">
                            <div class="sb-icon">
                                <img src={require("../../img/icon-2.png")} alt=""/>
                            </div>
                            <div class="sb-text">
                                <h6>Delivery On Time</h6>
                                <p>If good have prolems</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-benefit">
                            <div class="sb-icon">
                                <img src={require("../../img/icon-1.png")} alt=""/>
                            </div>
                            <div class="sb-text">
                                <h6>Secure Payment</h6>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}