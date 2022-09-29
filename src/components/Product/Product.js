import React from 'react';
import './Product.css'
const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { name, time, age, img } = product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Age: {age}</p>
                <p><small>Time: {time}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-list'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Product;