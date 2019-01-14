import React, { Component } from 'react';
import './App.css';

import Main from './Components/main';
import HeaderComponent from './Components/layout';
import NavBar from './Components/navbar';
import ContactComponent from './Components/contactUs';
import FooterComponent from './Components/footer';
import ServicesComponent from './Components/services';
import AboutComponent from './Components/about';
import ClientComponent from './Components/clients';
import SolutionsComponent from './Components/solutions';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <HeaderComponent />
        <ServicesComponent />
        <SolutionsComponent />
        <AboutComponent />
        <ClientComponent />
        <ContactComponent />
        <FooterComponent />

      </div>
    );
  }
}

export default App;
