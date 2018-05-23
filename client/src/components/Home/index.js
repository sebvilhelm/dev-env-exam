import React from 'react';
import axios from 'axios';

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
      <div>
        <h1>Home</h1>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
