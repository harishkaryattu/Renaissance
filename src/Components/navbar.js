import React, { Component } from 'react';
class NavBar extends Component {

    render() {

        return (

            <nav id="mainNav" className="navbar navbar-custom navbar-expand-md bg-dark sticky-top">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand page-scroll" href="#page-top">Renaissance</a>
                    </div>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="nav navbar-nav ml-auto justify-content-end">
                            <li className="hidden active">
                                <a href="#page-top"></a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className='nav-item dropdown'>
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenu"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#portfolio">Solutions
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="#team">Careers</a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        );
    }
}

export default NavBar;