import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-10'>
        <div className='blogColor shadow-xl pb-10 lg:w-[400px] md:w-[450px]'>
      <div className=' p-5 text-center' >
          <h1 className='text-xl font-semibold pb-5'>Ques: How will you improve the performance of a React Application?</h1>
          <p>Ans: Optimizing performance in a React application
Keeping component state local where necessary.
Memoizing React components to prevent unnecessary re-renders.
Code-splitting in React using dynamic import()
Windowing or list virtualization in React.
Lazy loading images in React..</p>
      </div>
    </div>

    <div class="blogColor shadow-xl pb-10 lg:w-[400px] md:w-[450px]">



<div class=" p-5 text-center">

<h3 class="blogColor text-xl font-semibold ">Ques: What are the different ways to manage a state in a React application?</h3>

<p class="text-[17px] py-3">Ans: There are four main types of state you need to properly manage in your React apps:

Local state
Global state
Server state
URL state.</p>

</div>
</div>
<div class="blogColor shadow-xl pb-10 lg:w-[400px] md:w-[450px]">


<div class=" p-5 text-center">
<h3 class="text-xl font-semibold ">Ques: How does prototypical inheritance work?</h3>
<p class="text-[17px] py-3">Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. 
</p>
</div>
</div>

<div class="blogColor shadow-xl pb-10 lg:w-[400px] md:w-[450px]">


<div class=" p-5 text-center">
<h3 class="text-xl font-semibold ">Ques: Why you do not set the state directly in React?</h3>
<p class="text-[17px] py-3">Ans: One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this. 
</p>
</div>
</div>

<div class="blogColor shadow-xl pb-10 lg:w-[400px] md:w-[450px]">


<div class=" p-5 text-center">
<h3 class="text-xl font-semibold ">Ques: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
<p class="text-[17px] py-3">Ans: You want your product's name and description to be optimised to match shopper-relevant keywords as closely as possible. The closer your name and product description come to matching the targeted keywords, the higher your product will appear in the search results, thereby making it visible to customers more quickly.
</p>
</div>
</div>

<div class="blogColor shadow-xl pb-10 lg:w-[400px] md:w-[450px]">


<div class=" p-5 text-center">
<h3 class="text-xl font-semibold ">Ques: What is a unit test? Why should write unit tests? </h3>
<p class="text-[17px] py-3">Ans: Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.
</p>
</div>
</div>
   </div>
    );
};

export default Blog;