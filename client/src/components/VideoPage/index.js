import React from 'react';
import axios from 'axios';
import { Switch } from 'antd';

import Player from '../Player';
import Details from './Details';
import Rating from './Rating';
import './style.css';

export default class VideoPage extends React.Component {
  state = {
    video: {
      videoURL: '',
      title: '',
      description: '',
    },
    darkMode: false,
  };

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`).then(({ data: video }) => this.setState({ video }));
  }

  setPageClassNames = () => {
    if (this.state.darkMode) {
      return 'video-page video-page--dark-mode';
    }
    return 'video-page';
  };

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {
    const { video } = this.state;
    return (
      <div className={this.setPageClassNames()}>
        <div className="video-page__container">
          <Player videoLink={video.videoURL} />
          <Switch onChange={this.toggleDarkMode} />
          <Details title={video.title} description={video.description} />
          <Rating />
        </div>
      </div>
    );
  }
}
