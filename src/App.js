import React, { Component } from 'react';
import './App.css';

import Main from './Components/main';

import NavBar from './Components/navbar';

import FooterComponent from './Components/footer';



class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <FooterComponent />

      </div>
    );
  }
}

export default App;
