import React, { Component } from 'react';
import './App.css';

 import Main from './Components/main';
import HeaderComponent from './Components/layout';

class App extends Component {
  render() {
    return (
      <div className="App">
<HeaderComponent/>
 <Main/> 
      </div>
    );
  }
}

export default App;
