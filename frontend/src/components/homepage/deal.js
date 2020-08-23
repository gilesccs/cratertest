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

import Countdown from 'react-countdown';

const renderer = ({days, hours, minutes, seconds, completed}) => {
// return <span>{hours}:{minutes}:{seconds}</span>
return (
            <div>
                <div class="countdown-timer" id="countdown">
                    <div class="cd-item">
                    <span>{days}</span>
                        <p>Days</p>
                    </div>
                    <div class="cd-item">
                        <span>{hours}</span>
                        <p>Hrs</p>
                    </div>
                    <div class="cd-item">
                        <span>{minutes}</span>
                        <p>Mins</p>
                    </div>
                    <div class="cd-item">
                        <span>{seconds}</span>
                        <p>Secs</p>
                    </div>
                </div>
                <a href="#" class="primary-btn">Shop Now</a>
            </div>
);

}

export default class Deal extends React.Component{


    render() {
        return (
            <section class="deal-of-week set-bg spad" data-setbg={require("../../img/time-bg.jpg")}>
                <div class="container">
                    <div class="col-lg-6 text-center">
                        <div class="section-title">
                            <h2>Deal Of The Week</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                                consectetur adipisicing elit </p>
                            <div class="product-price">
                                $35.00
                                <span>/ HanBag</span>
                            </div>
                        </div>

                        <Countdown date={Date.now() + 100000000} renderer={renderer}>
                            
                        </Countdown>
                    </div>
                </div>
                <div>
                    <img src={require("../../img/time-bg.jpg")}/>
                </div>
            </section>

        );
    }
}