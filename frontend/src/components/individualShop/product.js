import React from "react";


// Owl Carousel imports
// import $ from 'jQuery';
import OwlCarousel from "react-owl-carousel";
// import 'owl.carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import './../../css/owl.carousel.min.css';

// // CSS Imports for individual shop page
import "./../../css/individualShop/main_styles.css";
import "./../../css/individualShop/product.css";
import "./../../css/individualShop/product_responsive.css";
import "./../../css/individualShop/responsive.css";

// Link imports
import Navigation from "../shared/navigation";
import { Link } from "react-router-dom";

import BG from "../../img/banner-1.jpg";

// CSS Imports
// import "./../../css/individualShop/";
// require.context("./../../css/individualShop/")

export default class Product extends React.Component {
  render() {
    return (
      <div class="products">
		<div class="section_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="products_container grid">
							
							
							<div class="product grid-item hot">
								<div class="product_inner">
									<div class="product_image">
										<img src={require("../../img/individualShop/product_1.jpg")} alt=""/>
										<div class="product_tag">hot</div>
									</div>
									<div class="product_content text-center">
										<div class="product_title"><a href="product.html">long red shirt</a></div>
										<div class="product_price">$39.90</div>
										<div class="product_button ml-auto mr-auto trans_200"><a href="#">add to cart</a></div>
									</div>
								</div>	
							</div>

							
							<div class="product grid-item">
								<div class="product_inner">
									<div class="product_image"><img src={require("../../img/individualShop/product_2.jpg")} alt=""/></div>
									<div class="product_content text-center">
										<div class="product_title"><a href="product.html">hype grey shirt</a></div>
										<div class="product_price">$19.50</div>
										<div class="product_button ml-auto mr-auto trans_200"><a href="#">add to cart</a></div>
									</div>
								</div>	
							</div>

							
							<div class="product grid-item sale">
								<div class="product_inner">
									<div class="product_image">
										<img src={require("../../img/individualShop/product_3.jpg")} alt=""/>
										<div class="product_tag">sale</div>
									</div>
									<div class="product_content text-center">
										<div class="product_title"><a href="product.html">long sleeve jacket</a></div>
										<div class="product_price">$32.20<span>RRP 64.40</span></div>
										<div class="product_button ml-auto mr-auto trans_200"><a href="#">add to cart</a></div>
									</div>
								</div>	
							</div>

							
							<div class="product grid-item">
								<div class="product_inner">
									<div class="product_image">
										<img src={require("../../img/individualShop/product_4.jpg")} alt=""/>
									</div>
									<div class="product_content text-center">
										<div class="product_title"><a href="product.html">denim men shirt</a></div>
										<div class="product_price">$59.90</div>
										<div class="product_button ml-auto mr-auto trans_200"><a href="#">add to cart</a></div>
									</div>
								</div>	
							</div>

							
							<div class="product grid-item">
								<div class="product_inner">
									<div class="product_image">
										<img src={require("../../img/individualShop/product_5.jpg")} alt=""/>
									</div>
									<div class="product_content text-center">
										<div class="product_title"><a href="product.html">long red shirt</a></div>
										<div class="product_price">$79.90</div>
										<div class="product_button ml-auto mr-auto trans_200"><a href="#">add to cart</a></div>
									</div>
								</div>	
							</div>

							
							<div class="product grid-item new">
								<div class="product_inner">
									<div class="product_image">
										<img src={require("../../img/individualShop/product_6.jpg")} alt=""/>
										<div class="product_tag">new</div>
									</div>
									<div class="product_content text-center">
										<div class="product_title"><a href="product.html">hype grey shirt</a></div>
										<div class="product_price">$59.90</div>
										<div class="product_button ml-auto mr-auto trans_200"><a href="#">add to cart</a></div>
									</div>
								</div>	
							</div>

							
							<div class="product grid-item">
								<div class="product_inner">
									<div class="product_image">
										<img src={require("../../img/individualShop/product_7.jpg")} alt=""/>
									</div>
									<div class="product_content text-center">
										<div class="product_title"><a href="product.html">long sleeve jacket</a></div>
										<div class="product_price">$15.90</div>
										<div class="product_button ml-auto mr-auto trans_200"><a href="#">add to cart</a></div>
									</div>
								</div>	
							</div>

							
							<div class="product grid-item sale">
								<div class="product_inner">
									<div class="product_image">
										<img src={require("../../img/individualShop/product_8.jpg")} alt=""/>
										<div class="product_tag">sale</div>
									</div>
									<div class="product_content text-center">
										<div class="product_title"><a href="product.html">denim men shirt</a></div>
										<div class="product_price">$43.99<span>RRP 64.40</span></div>
										<div class="product_button ml-auto mr-auto trans_200"><a href="#">add to cart</a></div>
									</div>
								</div>	
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
  }
}
