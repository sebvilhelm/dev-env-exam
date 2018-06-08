import React, { Component } from 'react';
import WebTorrent from 'webtorrent';

const style = {
  video: {
    width: '100%',
  },
};

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.client = WebTorrent();
  }

  state = {
    videoLink: '',
    webTorrentInitiated: false,
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
    if (this.state.videoLink.startsWith('magnet:') && !this.state.webTorrentInitiated) {
      this.client.add(this.state.videoLink, torrent => {
        const videoFile = torrent.files.find(file => file.name.endsWith('.mp4'));

        videoFile.renderTo(this.video.current);
        this.setState({ webTorrentInitiated: true });
      });
    }
  }

  componentWillUnmount() {
    if (this.state.webTorrentInitiated) {
      this.client.remove(this.state.videoLink);
    }
  }

  render() {
    return (
      <div>
        <video style={style.video} ref={this.video} controls>
          Your browser does not support HTML5 video.
        </video>
      </div>
    );
  }
}
