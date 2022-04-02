import React from 'react';
import { addTodb, removeCartDb } from '../Utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = ({ cosmetic }) => {
    const { name, _id, price } = cosmetic;
    const addToCart = (id) => {
        // console.log('clicked',id);
        // localStorage.setItem(_id, 1);
        addTodb(id);
    }
    const removeCart = id => {
        removeCartDb(id);
    }
    // const addToCartParams = () => addToCart(_id);
    return (
        <div className='container'>
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p><small>Id: {_id}</small></p>
            {/* <button onClick={addToCartParams}>Add to cart</button> */}
            <button onClick={() => addToCart(_id)}>Purchase</button>
            <button onClick={() => removeCart(_id)}>Remove</button>
            
        </div>
    );
};

export default Cosmetic;