import './multiple-carousel.scss'

import React, { Component } from "react";
import Slider from "react-slick";


export class MultipleItems extends React.Component {
    render() {
        if(document.documentElement.clientWidth < 700) {
            this.settings = {
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1
            };
        }else{
            this.settings = {
                infinite: true,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 3
            };
        }

        return (
            <div>
                <Slider {...this.settings}>
                    <div className="carousel__item">
                        <div className="carousel__item__title">
                            <h3>funboards</h3>
                            <h2>Chilli Rare Bird</h2>
                            <div>
                                <div className="price">$890</div>
                                <span><a className="link-price" href="">buy</a></span>
                            </div>
                        </div>
                        <div className="base">
                            <div className="base__image first-slide"></div>
                        </div>
                    </div>
                    <div className="carousel__item">
                        <div className="carousel__item__title">
                            <h3>surfboards</h3>
                            <h2>Emery NEM XF</h2>
                            <div>
                                <div className="price">$950</div>
                                <span><a className="link-price" href="">buy</a></span>
                            </div>
                        </div>
                        <div className="base">
                            <div className="base__image second-slide"></div>
                        </div>
                    </div>
                    <div className="carousel__item">
                        <div className="carousel__item__title">
                            <h3>funboards</h3>
                            <h2>Agency GROM</h2>
                            <div>
                                <div className="price">$670</div>
                                <span><a className="link-price" href="">buy</a></span>
                            </div>
                        </div>
                        <div className="base">
                            <div className="base__image third-slide"></div>
                        </div>
                    </div>
                    <div className="carousel__item">
                        <div className="carousel__item__title">
                            <h3>funboards</h3>
                            <h2>Chilli Rare Bird</h2>
                            <div>
                                <div className="price">$890</div>
                                <span><a className="link-price" href="">buy</a></span>
                            </div>
                        </div>
                        <div className="base">
                            <div className="base__image first-slide"></div>
                        </div>
                    </div>
                    <div className="carousel__item">
                        <div className="carousel__item__title">
                            <h3>surfboards</h3>
                            <h2>Emery NEM XF</h2>
                            <div>
                                <div className="price">$950</div>
                                <span><a className="link-price" href="">buy</a></span>
                            </div>
                        </div>
                        <div className="base">
                            <div className="base__image second-slide"></div>
                        </div>
                    </div>
                    <div className="carousel__item">
                        <div className="carousel__item__title">
                            <h3>funboards</h3>
                            <h2>Agency GROM</h2>
                            <div>
                                <div className="price">$670</div>
                                <span><a className="link-price" href="">buy</a></span>
                            </div>
                        </div>
                        <div className="base">
                            <div className="base__image third-slide"></div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}



