import React, { Component } from 'react';
import HeaderCarousel from './carousel';

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
                    <HeaderCarousel />
                </div>
            </header>




        );
    }
}

export default HeaderComponent;
