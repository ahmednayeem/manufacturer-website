 
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `https://shielded-savannah-50165.herokuapp.com/${productId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <h2>You are about to book: {product.name}</h2>
            <div className='text-center'>
            </div>
        </div>
    );
};

export default ProductDetail;