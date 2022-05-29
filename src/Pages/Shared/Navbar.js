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
        <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
       {menuItems}
            </ul>
          </div>
        <div> 
         <Link to='/'><img className='logo' src={bike} alt="" /></Link>
        </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
         {menuItems}

          </ul>
        </div>
        <div class="navbar-end">
         <Link to='/login'> <a className="btn text-white hover:bg-teal-400 ease-in-out duration-300 login">Login</a></Link>
        </div>
      </div>
    );
};

export default Navbar;