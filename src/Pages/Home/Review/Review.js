import React from 'react';

const Review = () => {
    return (
        <div>
            <h2 className='text-5xl mt-12 text-center'>Business Summary</h2>
<div class="stats stats-vertical lg:stats-horizontal shadow w-full text-center mt-5">
  <div class="stat">
  <i class="fa-solid fa-cart-shopping"></i>
    <div class="stat-title font-bold">Purches</div>
    <div class="stat-value">10K</div>
   
  </div>
  
  <div class="stat">
  <i class="fa-solid fa-users"></i>
    <div class="stat-title font-bold">New Users</div>
    <div class="stat-value">1,200</div>
    
  </div>
  
  <div class="stat">
  <i class="fa-solid fa-flag"></i>
    <div class="stat-title font-bold">Countries</div>
    <div class="stat-value">50</div>
  
  </div>
  
</div>
  
</div>
        
    );
};

export default Review;