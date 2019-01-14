import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class CarouselSlider extends Component {
    render() {
        return (
            <Carousel className='carouselComp'>
                <div>
                    <img src="./img/bg2.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./img/bg2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./img/bg2.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default CarouselSlider;