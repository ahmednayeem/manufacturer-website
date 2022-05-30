import React from 'react';
import img from '../MyProfile/img/pic.jpg'

const MyProfile = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure class="px-10 pt-10">
    <img src={img} alt="" class="rounded-xl h-[400px]" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Ahmed</h2>
    <p><span className='font-bold'>Email: </span> ahmednaim353@gmail.com</p>
    <p><span className='font-bold'>education:</span> Diploma in cse</p>
    <p><span className='font-bold'>skills: </span>html, css, javascript, react, wordpress</p>
  </div>
</div>
        </div>
    );
};

export default MyProfile;