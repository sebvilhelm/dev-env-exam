import React from 'react';

import VideoLink from './VideoLink';

export default ({ videos }) => (
  <div>
    <div>
      {videos.map(({ title, id, thumbnail }) => (
        <VideoLink key={id} title={title} link={`/video/${id}`} thumbnail={thumbnail} />
      ))}
    </div>
  </div>
);
