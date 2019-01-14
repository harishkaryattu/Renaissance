import React, { Component } from 'react';
class NavBar extends Component {

    render() {

        return (

            <nav id="mainNav" class="navbar navbar-custom navbar-expand-md sticky-top">
                <div class="container">
                    <div class="navbar-header page-scroll">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                        </button>
                        <a class="navbar-brand page-scroll" href="#page-top">Renaissance</a>
                    </div>

                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="nav navbar-nav ml-auto justify-content-end">
                            <li class="hidden active">
                                <a href="#page-top"></a>
                            </li>
                            <li class='nav-item'>
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class='nav-item dropdown'>
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenu"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#portfolio">Solutions
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class='nav-item'>
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class='nav-item'>
                                <a class="nav-link" href="#team">Careers</a>
                            </li>
                            <li class='nav-item'>
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        );
    }
}

export default NavBar;