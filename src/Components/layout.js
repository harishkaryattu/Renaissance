import React, { Component } from 'react';
// import './externalJs/jqBootstrapValidation.js';
// import './externalJs/contact_me.js';

import CarouselSlider from './carousel'
class HeaderComponent extends Component {
    render() {
        return (

            <header className='appBody'>
                <div className="container">

                    {/* <div className="intro-text">
                        <div className="intro-lead-in">Welcome To Our Renaissance</div>
                        <div className="intro-heading">It's Nice To Meet You</div>
                        <a href="#services" className="page-scroll btn btn-xl">Tell Me More</a>
                    </div> */}
                    <CarouselSlider />
                </div>
            </header>




        );
    }
}

export default HeaderComponent;
