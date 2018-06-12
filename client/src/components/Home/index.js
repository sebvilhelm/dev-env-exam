import React from 'react';
import './style.css';

import VideoList from '../VideoList';

export default props => (
  <div className="container">
    <h1>Featured Programs</h1>
    <VideoList className="list-container" videos={props.videos} />
  </div>
);
