import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header withUser="true" />
      </div>
    );
  }
}

export default App;
