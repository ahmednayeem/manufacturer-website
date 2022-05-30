import React from 'react';
import './Banner.css'

const Banner = () => {
    return (

<div className="hero min-h-screen" style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.6) 100%), url(https://www.wallpaperup.com/uploads/wallpapers/2013/01/01/27175/c7c2670fcd8101ada00aaef952b708d7-1000.jpg)"}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">You Here for bikes</h1>
      <p className="mb-5 text-white text-xl">You've come to the right place. The best equipment for bikes is available here. So grab your product right now.</p>
      <button className="text-white bg-sky-600 hover:bg-sky-700 ease-in-out duration-300 btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    );
};

export default Banner;