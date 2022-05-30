import React from 'react';
import Banner from './Banner';
import Comment from './Comment/Comment';
import Products from './Products/Products';





const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Products></Products>
          <Comment></Comment>
         
         
        </div>
    );
};

export default Home;