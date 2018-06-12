import React from 'react';
import { Button } from 'antd';

export default props => (
  <div {...props}>
    <Button icon="like">Like</Button>
    <Button icon="dislike">Dislike</Button>
  </div>
);
