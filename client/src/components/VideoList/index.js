import React from 'react';

import VideoLink from './VideoLink';

export default ({ videos, ...props }) => (
  <div {...props}>
      {videos.map(({ title, id, thumbnail }) => (
        <VideoLink key={id} title={title} link={`/video/${id}`} thumbnail={thumbnail} />
      ))}
  </div>
);