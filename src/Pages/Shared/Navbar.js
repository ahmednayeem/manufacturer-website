import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import bike from '../../assets/icons/vecteezy_motor-classic-illustration_-removebg-preview.png';
import auth from '../../firebase.init';
import './Navbar.css'


const Navbar = () => {

  const [user] = useAuthState(auth);

  const logout = () => {
      signOut(auth);
    };

  const menuItems = <>
 
              <li className='text-xl hover:text-orange-400  text-white  ease-in-out duration-100'><Link to="/">Home</Link></li>
              <li className='text-white text-xl hover:text-orange-400  ease-in-out duration-100'><Link to="/about">About</Link></li>
              <li className='text-white text-xl hover:text-orange-400  ease-in-out duration-100'><Link to="/blogs">blog</Link></li>

              <li>
          {user ? 
  
         <div>

<li><Link to="/myprofile" className='text-white text-xl hover:text-orange-400  ease-in-out duration-100'>My Profile</Link></li>
             
              <Link to="/login" className="text-xl  text-white hover:text-orange-400  ease-in-out duration-100'"  onClick={logout} >Sign Out </Link>

      
         </div>

        : 
        <Link to="/login" className='text-xl  text-white hover:text-orange-400  ease-in-out duration-100'>Login</Link>}</li>


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

      </div>
    );
};

export default Navbar;