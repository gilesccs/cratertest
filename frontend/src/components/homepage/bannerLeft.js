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

// Background import
import Background from '../../img/products/women-large.jpg'

export default class BannerLeft extends React.Component{
    render() {
        return (
            <section class="women-banner spad">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="product-large set-bg" 
                                style={{
                                    backgroundImage: `url(${Background})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "top center",
                                    }}>
                                {/* <img src={require("../../img/products/women-large.jpg")}/> */}
                                <h2>Women’s</h2>
                                <a href="#">Discover More</a>   
                            </div>
                        </div>
                        <div class="col-lg-8 offset-lg-1">
                            <div class="filter-control">
                                <ul>
                                    <li class="active">Clothings</li>
                                    <li>HandBag</li>
                                    <li>Shoes</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>
                            <OwlCarousel items={1} margin={2} autoplay ={true} nav={true} center={true} autoWidth={true} dots={false}>  
                                <div class="product-item">
                                    <div class="pi-pic">
                                        <img src={require("../../img/products/women-1.jpg")} alt=""/>
                                        <div class="sale">Sale</div>
                                        <div class="icon">
                                            <i class="icon_heart_alt"></i>
                                        </div>
                                        <ul>
                                            <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                            <li class="quick-view"><a href="#">+ Quick View</a></li>
                                            <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="pi-text">
                                        <div class="catagory-name">Coat</div>
                                        <a href="#">
                                            <h5>Pure Pineapple</h5>
                                        </a>
                                        <div class="product-price">
                                            $14.00
                                            <span>$35.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-item">
                                    <div class="pi-pic">
                                        <img src={require("../../img/products/women-2.jpg")} alt=""/>
                                        <div class="icon">
                                            <i class="icon_heart_alt"></i>
                                        </div>
                                        <ul>
                                            <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                            <li class="quick-view"><a href="#">+ Quick View</a></li>
                                            <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="pi-text">
                                        <div class="catagory-name">Shoes</div>
                                        <a href="#">
                                            <h5>Guangzhou sweater</h5>
                                        </a>
                                        <div class="product-price">
                                            $13.00
                                        </div>
                                    </div>
                                </div>
                                <div class="product-item">
                                    <div class="pi-pic">
                                        <img src={require("../../img/products/women-3.jpg")} alt=""/>
                                        <div class="icon">
                                            <i class="icon_heart_alt"></i>
                                        </div>
                                        <ul>
                                            <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                            <li class="quick-view"><a href="#">+ Quick View</a></li>
                                            <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="pi-text">
                                        <div class="catagory-name">Towel</div>
                                        <a href="#">
                                            <h5>Pure Pineapple</h5>
                                        </a>
                                        <div class="product-price">
                                            $34.00
                                        </div>
                                    </div>
                                </div>
                                <div class="product-item">
                                    <div class="pi-pic">
                                        <img src={require("../../img/products/women-4.jpg")} alt=""/>
                                        <div class="icon">
                                            <i class="icon_heart_alt"></i>
                                        </div>
                                        <ul>
                                            <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                            <li class="quick-view"><a href="#">+ Quick View</a></li>
                                            <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="pi-text">
                                        <div class="catagory-name">Towel</div>
                                        <a href="#">
                                            <h5>Converse Shoes</h5>
                                        </a>
                                        <div class="product-price">
                                            $34.00
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                            {/* <div class="product-slider owl-carousel">
                                <div class="product-item">
                                    <div class="pi-pic">
                                        <img src={require("../../img/products/women-1.jpg")} alt=""/>
                                        <div class="sale">Sale</div>
                                        <div class="icon">
                                            <i class="icon_heart_alt"></i>
                                        </div>
                                        <ul>
                                            <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                            <li class="quick-view"><a href="#">+ Quick View</a></li>
                                            <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="pi-text">
                                        <div class="catagory-name">Coat</div>
                                        <a href="#">
                                            <h5>Pure Pineapple</h5>
                                        </a>
                                        <div class="product-price">
                                            $14.00
                                            <span>$35.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-item">
                                    <div class="pi-pic">
                                        <img src={require("../../img/products/women-2.jpg")} alt=""/>
                                        <div class="icon">
                                            <i class="icon_heart_alt"></i>
                                        </div>
                                        <ul>
                                            <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                            <li class="quick-view"><a href="#">+ Quick View</a></li>
                                            <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="pi-text">
                                        <div class="catagory-name">Shoes</div>
                                        <a href="#">
                                            <h5>Guangzhou sweater</h5>
                                        </a>
                                        <div class="product-price">
                                            $13.00
                                        </div>
                                    </div>
                                </div>
                                <div class="product-item">
                                    <div class="pi-pic">
                                        <img src={require("../../img/products/women-3.jpg")} alt=""/>
                                        <div class="icon">
                                            <i class="icon_heart_alt"></i>
                                        </div>
                                        <ul>
                                            <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                            <li class="quick-view"><a href="#">+ Quick View</a></li>
                                            <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="pi-text">
                                        <div class="catagory-name">Towel</div>
                                        <a href="#">
                                            <h5>Pure Pineapple</h5>
                                        </a>
                                        <div class="product-price">
                                            $34.00
                                        </div>
                                    </div>
                                </div>
                                <div class="product-item">
                                    <div class="pi-pic">
                                        <img src={require("../../img/products/women-4.jpg")} alt=""/>
                                        <div class="icon">
                                            <i class="icon_heart_alt"></i>
                                        </div>
                                        <ul>
                                            <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                            <li class="quick-view"><a href="#">+ Quick View</a></li>
                                            <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="pi-text">
                                        <div class="catagory-name">Towel</div>
                                        <a href="#">
                                            <h5>Converse Shoes</h5>
                                        </a>
                                        <div class="product-price">
                                            $34.00
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}