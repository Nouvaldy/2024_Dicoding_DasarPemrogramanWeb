import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <header>
      <h1><Link to="/">Aplikasi Catatan</Link></h1>
      <nav className="navigation">
        <ul>
          <li><Link to="/archives">Arsip</Link></li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
  );
}

export default Navigation;