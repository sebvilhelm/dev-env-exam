import React from 'react';

import LoginForm from './LoginForm';

export default props => (
  <div className="container">
    <LoginForm
      onSubmit={userName => {
        props.login(userName);
        props.history.push('/');
      }}
    />
  </div>
);
