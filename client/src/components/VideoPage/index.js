import React from 'react';
import axios from 'axios';

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
  };

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`).then(({ data: video }) => this.setState({ video }));
  }

  toggleDarkMode = () => {
    console.log('dark mode');
  };

  render() {
    const { video } = this.state;
    return (
      <div className="video-page__container">
        <Player videoLink={video.videoURL} />
        <div className="video-page__info">
          <Details title={video.title} description={video.description} />
          <Rating className="video-page__rating" />
        </div>
      </div>
    );
  }
}
