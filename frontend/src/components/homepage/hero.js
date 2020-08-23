import React from "react";
import "./../../css/bootstrap.min.css";
import "./../../css/font-awesome.min.css";
import "./../../css/themify-icons.css";
import "./../../css/elegant-icons.css";

// Owl Carousel imports
// import $ from 'jQuery';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './../../css/owl.carousel.min.css';

import "./../../css/nice-select.css";
// import './../../css/jquery-ui.min.css';
import "./../../css/slicknav.min.css";
import "./../../css/style.css";



export default class Hero extends React.Component {
  render() {
    return (
        <div>  
            <div class='container-fluid' >      
                <div className="row title" style={{marginBottom: "20px"}} >      
                    <div class="col-sm-12 btn btn-info">      
                        Promotions   
                    </div>      
                </div>  
            </div>  
            <div class='container-fluid' >   
                <OwlCarousel items={1} margin={8} autoplay ={true} nav={true} center={true} loop={true}>  
                    <div >
                        <div class="hero-section" style={{position:"absolute", display:"block",paddingLeft:"40px"}}>
                            <div class="row">
                                <div class="col-lg-5">
                                    <span>Bag,kids</span>
                                    <h1>Black Friday</h1>
                                    <p>
                                        Test
                                    </p>
                                    <a href="#" class="primary-btn">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img  className="img" src= {require("../../img/hero-1.jpg")}/>
                    </div>  
                    <div >
                        <div style={{position:"absolute", display:"block",paddingLeft:"20px"}}>
                            <div class="row">
                                <div class="col-lg-5">
                                    <span>Bag,kids</span>
                                    <h1>Black Friday</h1>
                                    <p>
                                        Test
                                    </p>
                                    <a href="#" class="primary-btn">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img  className="img" src= {require("../../img/hero-2.jpg")}/>
                    </div>  
                    {/* <div ><img  className="img" src= {require("../../img/hero-2.jpg")}/></div>   */}
                    {/* <div ><img  className="img" src= {require("../../img/banner-1.jpg")}/></div>   */}
                    {/* <div ><img  className="img" src= {require("../../img/banner-2.jpg")}/></div>   */}
                    {/* <div ><img  className="img" src= {require("../../img/banner-3.jpg")}/></div> */}
               </OwlCarousel>  
            </div>  
      </div>  
        // <OwlCarousel>
            // <section class="hero-section">
            //     <div class="hero-items owl-carousel">
            //     <div class="single-hero-items set-bg" data-setbg={require("../../img/hero-1.jpg")}>
            //         <div class="container">
            //         <div class="row">
            //             <div class="col-lg-5">
            //             <span>Bag,kids</span>
            //             <h1>Black friday</h1>
            //             <p>
            //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            //                 sed do eiusmod tempor incididunt ut labore et dolore
            //             </p>
            //             <a href="#" class="primary-btn">
            //                 Shop Now
            //             </a>
            //             </div>
            //         </div>
            //         <div class="off-card">
            //             <h2>
            //             Sale <span>50%</span>
            //             </h2>
            //         </div>
            //         </div>
            //     </div>
            //     <div class="single-hero-items set-bg" data-setbg={require("../../img/hero-2.jpg")}>
            //         <div class="container">
            //         <div class="row">
            //             <div class="col-lg-5">
            //             <span>Bag,kids</span>
            //             <h1>Black friday</h1>
            //             <p>
            //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            //                 sed do eiusmod tempor incididunt ut labore et dolore
            //             </p>
            //             <a href="#" class="primary-btn">
            //                 Shop Now
            //             </a>
            //             </div>
            //         </div>
            //         <div class="off-card">
            //             <h2>
            //             Sale <span>50%</span>
            //             </h2>
            //         </div>
            //         </div>
            //     </div>
            //     </div>
            // </section>
            
        // </OwlCarousel>   
    );
  }

//   styles = StyleSheet.create({
//         textoverlay: {
//             position:absolute;
//             color:#FFF;
//            font-size:12px;
//            display:block;
//         }}
      
//   )
}

