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

export default class Banner extends React.Component{
    render() {
        return (
            <div class="banner-section spad">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="single-banner">
                                <img src={require("../../img/banner-1.jpg")} alt=""/>
                                <div class="inner-text">
                                    <h4>Men’s</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-banner">
                                <img src={require("../../img/banner-2.jpg")} alt=""/>
                                <div class="inner-text">
                                    <h4>Women’s</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-banner">
                                <img src={require("../../img/banner-3.jpg")} alt=""/>
                                <div class="inner-text">
                                    <h4>Kid’s</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}