import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { deleteShopiingCart } from '../Utilities/fakedb';
import { add, getTotal, multiply } from '../Utilities/utilities';
// import add, { multiply } from '../Utilities/utilities';

const Cosmetics = () => {
    const total = add(3,4);
    const mul = multiply(3,4);
   

    // const cosmetics = [
    //     {id: 1, name:'alta', price:200},
    //     {id: 2, name:'malis', price:400},
    //     {id: 3, name:'palish', price:500},
    //     {id: 4, name:'nalish', price:600},
    //     {id: 5, name:'balish', price:700},
    // ];
    // const cosmetics = [
    //     {
    //       "_id": "624708f2b13f640bbc85d8be",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 348,
    //       "name": "Craig Navarro"
    //     },
    //     {
    //       "_id": "624708f2d0cef1502ff8fd44",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 380,
    //       "name": "Janell Leblanc"
    //     },
    //     {
    //       "_id": "624708f2662503648ff92dbe",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 274,
    //       "name": "Velasquez Rowe"
    //     },
    //     {
    //       "_id": "624708f258aafa84b1850d56",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 654,
    //       "name": "Marci Garrett"
    //     },
    //     {
    //       "_id": "624708f2dfce90b15d321a1b",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 745,
    //       "name": "Thornton Hampton"
    //     },
    //     {
    //       "_id": "624708f2f9f5090def0edd0e",
    //       "picture": "http://placehold.it/32x32",
    //       "price": 567,
    //       "name": "Adriana Terrell"
    //     }
    //   ];
    const [cosmetics,setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[]);
    const totalPrice = getTotal(cosmetics);
    return (
        <div>
            <p>Total: {total}</p>
            <p>Multiply: {mul}</p>
            <p>Total price : {totalPrice}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic._id} cosmetic={cosmetic}></Cosmetic>)
            }
            <button onClick={deleteShopiingCart}>Delete Cart</button>
        </div>
    );
};

export default Cosmetics;