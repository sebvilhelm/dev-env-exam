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
    {props.withUser && (
      <React.Fragment>
        <span style={{ color: '#ffffff' }}>Tobias Thygesen</span>
        <MiniSpacer />
        <Avatar icon="user" />
        <MiniSpacer />
        <Button>Logout</Button>
      </React.Fragment>
    )}
  </header>
);

export default Header;
