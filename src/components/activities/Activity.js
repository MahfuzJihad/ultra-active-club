import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Profile from '../Profile/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAllergies } from '@fortawesome/free-solid-svg-icons';
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

            <div className='left-cart'>
                <div className='font-icon'>
                    <FontAwesomeIcon icon={faAllergies}></FontAwesomeIcon>
                    <h1 className='site-name'>GUB-Fitness-club</h1>
                </div>
                <div className="activity-container">

                    {

                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="information-container">
                <Profile cart={cart}></Profile>
            </div>
        </div>
    );
};

export default Activity;