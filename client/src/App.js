import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './components/Home';
import VideoPage from './components/VideoPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header withUser="true" />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/video" component={VideoPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
