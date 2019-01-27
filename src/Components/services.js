import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ServicesComponent extends Component {
  render() {
    return (<section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Services</h2>
            {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> --> */}
          </div>
        </div>
        <div className="row text-center">

          <div className="col-md-4">
            <Link to='/description/5'>
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Information Connectivity</h4>
              {/*<p className="text-muted">The integration market is currently evolving towards complex integration due to mergers and acquisitions and also due to the strategies that include linking with suppliers, customers, and trading partners, building portals and intranet and participating in B2B marketplaces.</p> */}
            </Link>
          </div>

          <div className="col-md-4">
            <Link to='/description/6'>
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Portal Services</h4>
              {/*<p className="text-muted">
                    Renaissance InfoSystems provide services to help you design, develop, implement and integrate a scalable and secure portal solutions using IBM WebSphere Portal Server.</p>*/}
            </Link>
          </div>
          <div className="col-md-4">
            <Link to='/description/7'>
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Migration Security</h4>
              {/*<p className="text-muted">
                Software Migration Services are promising alternative to expensive, time intensive and often high risk re-writes for businesses. Migrating software systems eases the burden of IT executives as well as programmers by preserving a company’s existing investment in complex software systems </p>*/}
            </Link>
          </div>
          <div className="col-md-3" />
          <div className="col-md-3">
            <Link to='/description/8'>
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Maintanance & Support</h4>
              {/*<p className="text-muted">
                Software maintenance is one of the phases in the software development process, and follows deployment of the software into the field. The software maintenance phase involves changes to the software in order to correct defects and deficiencies found during field usage as well as the addition of new functionality to improve the software's maintainusability and applicability </p>*/}
            </Link>
          </div>
          <div className="col-md-3">
            <Link to='/description/9'>
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Education and Training</h4>
              {/*<p className="text-muted">
                Renaissance provide training services to the corporate professionals. Our training courses emphasize on the practical solutions rather than just the product training.</p>*/}
            </Link>
          </div>
        </div>
      </div>
    </section >);
  }
}

export default ServicesComponent;
