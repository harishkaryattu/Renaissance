import React, { Component } from 'react';
import { Button, Card, CardText, Navigation, Drawer, Header, Content, Layout } from 'react-mdl';
import ServicesComponent from './services';
import AboutComponent from './about';
import ClientComponent from './clients';
import SolutionsComponent from './solutions';
import ContactComponent from './contactUs';
import HeaderComponent from './layout';


class LandingPage extends Component {
  render() {
    return (
      <div>
        {/* <h1>This is home</h1>
            <p>Lets do it</p> */}

        <HeaderComponent />
        <ServicesComponent />
        <SolutionsComponent />
        <AboutComponent />
        <ClientComponent />
        <ContactComponent />

      </div>
    );
  }
}

export default LandingPage;