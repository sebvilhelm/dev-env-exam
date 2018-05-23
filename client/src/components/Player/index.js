import React, { Component } from 'react';
import WebTorrent from 'webtorrent';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.client = WebTorrent();
  }

  state = {
    videoLink: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.videoLink !== prevState.videoLink) {
      return {
        videoLink: nextProps.videoLink,
      };
    }
    return null;
  }

  componentDidUpdate() {
    this.client.add(this.state.videoLink, torrent => {
      const file = torrent.files.find(file => file.name.endsWith('.mp4'));

      file.renderTo(this.video.current);
    });
  }

  componentWillUnmount() {
    this.client.remove(this.state.videoLink);
  }

  render() {
    return (
      <div>
        <video ref={this.video} controls>
          Your browser does not support HTML5 video.
        </video>
      </div>
    );
  }
}
