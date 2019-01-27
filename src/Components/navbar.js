import React, { Component } from 'react';
import { Link } from "react-router-dom";
class NavBar extends Component {
    loadDescription(v) {
        console.log(v)
    }
    render() {

        return (

            <nav id="mainNav" className="navbar navbar-custom navbar-expand-md sticky-top">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand page-scroll" to='/'>Renaissance</Link>
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
                                    <Link className="dropdown-item" to='/description/1'>Integration Services</Link>
                                    <Link className="dropdown-item" to='/description/2'>Business Process Management</Link>
                                    <Link className="dropdown-item" to='/description/3'>Service Oriented Architecture</Link>
                                    <Link className="dropdown-item" to='/description/4'>Business Activity Monitoring</Link>
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