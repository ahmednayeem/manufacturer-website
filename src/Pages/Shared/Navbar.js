import React from 'react';
import { Link } from 'react-router-dom';
import bike from '../../assets/icons/vecteezy_motor-classic-illustration_-removebg-preview.png';
import './Navbar.css'


const Navbar = () => {
  const menuItems = <>
 
              <li className='text-xl hover:bg-sky-700  text-white  ease-in-out duration-300'><Link to="/">Home</Link></li>
              <li className='text-white text-xl hover:bg-sky-700  ease-in-out duration-300'><Link to="/about">About</Link></li>
              <li className='text-white text-xl hover:bg-sky-700  ease-in-out duration-300'><Link to="/blogs">blogs</Link></li>
              </>
    return (
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
       {menuItems}
            </ul>
          </div>
        <div> 
         <Link to='/'><img className='logo' src={bike} alt="" /></Link>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
         {menuItems}

          </ul>
        </div>
        <div className="navbar-end">
         <Link to='/login'> <a className="btn text-white login">Login</a></Link>
        </div>
      </div>
    );
};

export default Navbar;