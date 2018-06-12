import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';

import Home from './components/Home';
import VideoPage from './components/VideoPage';
import Login from './components/Login';

class App extends React.Component {
  state = {
    videos: [],
    user: undefined,
  };

  componentDidMount() {
    this.getVideos();
  }

  getVideos = () => {
    axios.get('/api/videos').then(res => {
      const videos = res.data;
      this.setState({ videos });
    });
  };

  login = userName => {
    this.setState({ user: userName });
  };

  logout = () => this.setState({ user: undefined });

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header user={this.state.user} withUser="true" />

          <div>
            <Switch>
              <Route exact path="/" component={props => <Home {...props} videos={this.state.videos} />} />
              <Route path="/video/:id" component={VideoPage} />
              <Route
                path="/login"
                component={props => (this.state.user ? <Redirect to="/" /> : <Login {...props} login={this.login} />)}
              />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
