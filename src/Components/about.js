import React, { Component } from 'react';


class AboutComponent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">About</h2>
              <h3 className="section-subheading text-muted">About Renaissance family</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src="img/about/1.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">

                      <h4 className="subheading">Overview</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">


                        Renaissance InfoSystems is a privately held company based in Singapore and Melbourne (Australia) delivering technology, people and process solutions to the commercial and public sectors.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src="img/about/2.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2002 in Singapore,</h4>
                      <h4 className="subheading">Renaissance Founded</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Operations

Renaissance is a preferred IBM Business Partner specialising in Enterprise Level Integration using the IBM WebSphere Suite.

In 2007, Renaissance established an office in Melbourne ensuring its committment to the Australian market. </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src="img/about/3.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Service Offerings</h4>

                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">

                        Renaissance is a global systems integrator focused on providing end-to-end enterprise solutions with capabilities in Business/SOA Implementations, Portal Development and Managed Application Services.

                        The Directors of Renaissance have combined experience of over 60 years suc,essfully implementing technical solutions to world-class customers in the Asia-Pacific Region. Add to that access to top-level resources and methodologies.

Renaissance has a proven track record of implementing cutting-edge technology for clients across a range of sectors, including: Telecommunications, Airline & Transport, Financial Services, Utilities, Logistics, Government and Retail/Distribution.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src="./img/about/4.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Our areas of expertise includes</h4>

                    </div>
                    <div className="timeline-body">


                      <ul className="text-muted">
                        <li>
                          174 Integration Solutions</li>
                        <li>
                          174 Business Process Management (BPM)</li>
                        <li>
                          174 Service Oriented Architecture (SOA)</li>
                        <li>
                          174 Business Activity Monitoring (BAM)</li>
                        <li>
                          174 Information Connectivity Services</li>
                        <li>
                          174 Portal Services </li>
                      </ul>


                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Be Part
                                    <br />Of Our
                                    <br />Story!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutComponent;