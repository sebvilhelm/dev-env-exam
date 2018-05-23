import React, { Component } from 'react';

export default class Player extends Component {
  render() {
    const { video } = this.props.video;
    return (
      <div>
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    );
  }
}
