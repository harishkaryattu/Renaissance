import React, { Component } from 'react';


class ClientComponent extends Component {
    render() {
        return (
            <section className="clients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img src="../src/Components/img/logos/envato.jpg" className="img-responsive img-centered" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img src="img/logos/designmodo.jpg" className="img-responsive img-centered" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img src="img/logos/themeforest.jpg" className="img-responsive img-centered" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img src="img/logos/creative-market.jpg" className="img-responsive img-centered" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ClientComponent;