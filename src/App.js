import React, { Component } from 'react';
import Sidebar from 'containers/Sidebar'
import Main from 'containers/Main'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidebar />
      <Main />
      </div>
    );
  }
}

export default App;
