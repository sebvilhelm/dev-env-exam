import React from 'react';

import VideoLink from './VideoLink';

export default ({ videos }) => (
  <div>
    <h2>VideoList</h2>
    <div>
      {videos.map(({ title, id, thumbnail }) => (
        <VideoLink key={id} title={title} link={`/video/${id}`} thumbnail={thumbnail} />
      ))}
    </div>
  </div>
);
