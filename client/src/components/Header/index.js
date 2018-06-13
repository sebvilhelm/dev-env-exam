import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Avatar } from 'antd';
import './style.css';

import Logo from '../Logo';

const Spacer = () => <div style={{ flex: 1 }} aria-hidden="true" />;

const MiniSpacer = () => <div style={{ padding: '0 5px' }} aria-hidden="true" />;

const Header = props => (
  <header className="header">
    <div>
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <Spacer />
    {(props.user && (
      <React.Fragment>
        <span id="header__userName" style={{ color: '#ffffff' }}>
          {props.user}
        </span>
        <MiniSpacer />
        <Avatar icon="user" />
        <MiniSpacer />
        <Button onClick={props.logout}>Logout</Button>
      </React.Fragment>
    )) || (
      <Link to="/login" id="btnLogin">
        <Button>Login</Button>
      </Link>
    )}
  </header>
);

export default Header;
