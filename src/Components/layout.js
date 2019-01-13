import React, { Component } from 'react';
import  { Button, Card, CardText , Navigation, Drawer, Header, Content, Layout } from 'react-mdl';
// import './externalJs/jqBootstrapValidation.js';
// import './externalJs/contact_me.js';


class HeaderComponent extends Component {
  render() {
    return (
      <div>
{/* Uses a transparent header that draws on top of the layout's background */}
<div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Renaissance" style={{color: 'white'}}>
            <Navigation>
                <a href="/">WHO WE ARE</a>
                <a href="/">WHAT WE DO</a>
                <a href="/">SOLUTIONS</a>
                <a href="/">WORK WITH US</a>
                <a href="/">NEWS</a>
                <a href="/">DOWNLOADS</a>
                <a href="/">GET IN TOUCH</a>
                
            </Navigation>
        </Header>
        <Drawer title="Renaissance">
            <Navigation>
            <a href="/">WHO WE ARE</a>
                <a href="/">WHAT WE DO</a>
                <a href="/">SOLUTIONS</a>
                <a href="/">WORK WITH US</a>
                <a href="/">NEWS</a>
                <a href="/">DOWNLOADS</a>
                <a href="/">GET IN TOUCH</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
<section id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Services</h2>
                    {/* <!-- <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> --> */}
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Information Connectivity Services</h4>
                    <p className="text-muted">The integration market is currently evolving towards complex integration due to mergers and acquisitions and also due to the strategies that include linking with suppliers, customers, and trading partners, building portals and intranet and participating in B2B marketplaces.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Portal Services</h4>
                    <p className="text-muted">	
Renaissance InfoSystems provide services to help you design, develop, implement and integrate a scalable and secure portal solutions using IBM WebSphere Portal Server.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Migration Security</h4>
                    <p className="text-muted">	
Software Migration Services are promising alternative to expensive, time intensive and often high risk re-writes for businesses. Migrating software systems eases the burden of IT executives as well as programmers by preserving a company’s existing investment in complex software systems </p>
                </div>
				 <div className="col-md-6">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Maintanance & Support</h4>
                    <p className="text-muted">	
	
Software maintenance is one of the phases in the software development process, and follows deployment of the software into the field. The software maintenance phase involves changes to the software in order to correct defects and deficiencies found during field usage as well as the addition of new functionality to improve the software's maintainusability and applicability </p>
                </div>
				 <div className="col-md-6">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Education and Training</h4>
                    <p className="text-muted">	
	
Renaissance provide training services to the corporate professionals. Our training courses emphasize on the practical solutions rather than just the product training.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name."></input>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address."></input>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number."></input>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <button type="submit" className="btn btn-xl">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <span className="copyright">Copyright &copy; Your Website 2016</span>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline social-buttons">
                        <li><a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li><a href="#"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li><a href="#">Privacy Policy</a>
                        </li>
                        <li><a href="#">Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
      </div>
    );
  }
}

export default HeaderComponent;
