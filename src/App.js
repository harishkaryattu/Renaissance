import React, { Component } from 'react';
import './App.css';

import Main from './Components/main';
import HeaderComponent from './Components/layout';
import NavBar from './Components/navbar';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <HeaderComponent />
        <Main />
      </div>
    );
  }
}

export default App;
