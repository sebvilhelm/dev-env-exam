import React from 'react';
import axios from 'axios';

import Player from '../Player';
import Details from './Details';
import Rating from './Rating';

export default class VideoPage extends React.Component {
  state = {
    video: {},
  };

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`).then(({ data: video }) => this.setState({ video }));
  }
  render() {
    const { video } = this.state;
    return (
      <div>
        <Player video={video} />
        <Details title={video.title} description={video.description} />
        <Rating />
      </div>
    );
  }
}
