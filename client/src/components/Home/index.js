import React from 'react';
import axios from 'axios';
import './style.css';

import VideoList from '../VideoList';

export default class Home extends React.Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    axios.get('/api/videos').then(res => {
      const videos = res.data;
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Featured Programs</h1>
        <VideoList className="list-container" videos={this.state.videos} />
      </div>
    );
  }
}
