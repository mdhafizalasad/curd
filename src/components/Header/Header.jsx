import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="navbar bg-black text-white">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">CURD</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Add User</Link></li> 
      <li><Link to="/all-users">All Users</Link></li> 
      
    </ul>
  </div>
</div>
    );
};

export default Header;