import React from 'react';

import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Theme from './components/Theme';
import './style.css';

export default function App() {
  return (
    <div>
      <Theme />

      <Profile />

      <div className="user-actions">
        <Login />
        <Logout />
      </div>
    </div>
  );
}
