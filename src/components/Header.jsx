import { useNavigate } from 'react-router-dom';
import React from 'react';

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <h1 className="main-title">Profile Card List</h1>
      </header>      

      <nav className="nav-links">
        <div onClick={() => navigate('/Home')}>Home</div>
        <div onClick={() => navigate('/ProfileForm')}>Card List</div>
        <div onClick={() => navigate('/ProfileList')}>Make Card</div>
      </nav>

    </div>
  );
}

export default Header;