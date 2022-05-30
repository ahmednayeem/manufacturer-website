import React from 'react';
import Banner from './Banner';
import Comment from './Comment/Comment';
import Products from './Products/Products';
import Review from './Review/Review';





const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Products></Products>
          <Review></Review>
          <Comment></Comment>
         
         
        </div>
    );
};

export default Home;