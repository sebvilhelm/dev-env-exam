import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Avatar } from 'antd';
import './style.css';

import Logo from '../Logo';

const Spacer = () => <div style={{ flex: 1 }} aria-hidden="true" />;

const Header = props => (
  <header className="header">
    <div>
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <Spacer />
    {props.withUser && (
      <div>
        <Avatar icon="user" />
        <Button>Logout</Button>
      </div>
    )}
  </header>
);

export default Header;
