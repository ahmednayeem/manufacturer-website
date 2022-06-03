import React from 'react';
import img from './img/pic.jpg'

const MyPortfolio = () => {
    return (
        <div>
                    <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure class="px-10 pt-10">
    <img src={img} alt="" class="rounded-xl h-[400px]" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Name: Ahmed Nayeem</h2>
    <p><span className='font-bold'>Email: </span> ahmednaim353@gmail.com</p>
    <p><span className='font-bold'>education:</span> Diploma in cse</p>
    <p><span className='font-bold'>Academy:</span> Saic Institute Of Management and Technology</p>
    <p><span className='font-bold'>skills: </span>html, css, javascript, react, wordpress</p>
   
   <p>
       Project: <a href="https://assignment-10-c337f.web.app/">wedding site</a>
 <br />
       <a href="https://assignment-10-c337f.web.app/">Laptop shop</a>
   </p>
  </div>
</div>
        </div>
        </div>
    );
};

export default MyPortfolio;