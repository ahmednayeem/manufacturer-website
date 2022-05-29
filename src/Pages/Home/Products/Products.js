import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Products.css';


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    

    return (
        <div>
            <h1 className='product-title mt-7'>Our Products</h1>
            <div className='container mx-auto'>
            {
                products.map(product => <Product
                key={product._id}
                product={product}
                
                ></Product>)
            }
            </div>
   
        </div>
    );
};

export default Products;