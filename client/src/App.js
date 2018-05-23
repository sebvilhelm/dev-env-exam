import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './components/Home';
import VideoPage from './components/VideoPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header withUser="true" />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/video/:id" component={VideoPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
