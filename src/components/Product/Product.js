import React from 'react';
import './Product.css'
const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, time, age, img } = props.product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Age: {age}</p>
                <p><small>Time: {time}s</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-list'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Product;