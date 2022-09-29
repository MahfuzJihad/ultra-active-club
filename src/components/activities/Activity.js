import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Activity.css';
const Activity = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='club-container'>

            <div>
                <h1 className='site-name'>Ultra-Active-club</h1>
                <div className="activity-container">

                    {

                        products.map(product => <Product
                            key={product.age}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="information-container">
                <h3>Profile</h3>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Activity;