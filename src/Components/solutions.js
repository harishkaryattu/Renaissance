import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SolutionsComponent extends Component {
  render() {
    return (
      <section id='portfolio' className='container'>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Solutions</h2>
            {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> --> */}
          </div>
        </div>

        <div className="portfolio-container">
          <div className="portfolio-row text-center">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
              <img className="image" src="http://www.bigart.design/images/other/joshua-earle-157231-600x600.jpg" />
              <Link className="overlay" to='/description/1'>
                <div className="text">
                  <p className="title">Ice Land</p>


                  <div className="divider">
                  </div>


                  <p className="sub-title">Joshua Earle</p>
                </div></Link>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
              <img className="image" src="http://www.bigart.design/images/other/joshua-sortino-228788-600x600.jpg" />
              <Link className="overlay" to='/description/2'>
                <div className="text">
                  <p className="title">Emergence from the Clouds</p>


                  <div className="divider">
                  </div>


                  <p className="sub-title">Joshua Sortino</p>
                </div></Link>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
              <img className="image" src="http://www.bigart.design/images/other/derick-anies-120213-600x600.jpg" />
              <Link className="overlay" to='/description/3'>
                <div className="text">
                  <p className="title">Man</p>


                  <div className="divider">
                  </div>


                  <p className="sub-title">Derick Anies</p>
                </div></Link>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
              <img className="image" src="http://www.bigart.design/images/other/joshua-newton-275881-600x600.jpg" />
              <Link className="overlay" to='/description/4'>
                <div className="text">
                  <p className="title">Flame</p>


                  <div className="divider">
                  </div>


                  <p className="sub-title">Joshua Newton</p>
                </div></Link>
            </div>
          </div>
        </div>
      </section>);
  }
}

export default SolutionsComponent;
