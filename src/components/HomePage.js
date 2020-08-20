import React from 'react';
import '../App.css'

import Card from './Card';
import CartPage from './CartPage'

const HomePage = () => {
    const data = [
        {
            id: 1,
            name: 'gloves',
            price: 25
        },
        {
            id: 2,
            name: 'hat',
            price: 30
        },
        {
            id: 3,
            name: 'coat',
            price: 75
        },
        {
            id: 4,
            name: 'scarf',
            price: 20
        },
        {
            id: 5,
            name: 'boots',
            price: 70
        },
        {
            id: 6,
            name: 'headband',
            price: 15
        },
        {
            id: 1,
            name: 'gloves',
            price: 25
        },
        {
            id: 2,
            name: 'hat',
            price: 30
        },
        {
            id: 3,
            name: 'coat',
            price: 75
        },
        {
            id: 4,
            name: 'scarf',
            price: 20
        },
        {
            id: 5,
            name: 'boots',
            price: 70
        },
        {
            id: 6,
            name: 'headband',
            price: 15
        }
    ]

    return (
        <div className="homepage-container">
            <div className="title-bar">
                <h2>New Shop</h2>
            </div>
            <div className="list">
                {data.map(item => 
                    <Card
                        id={item.id}
                        name={item.name}
                        price={item.price}
                    />
                )}
            </div>
            <CartPage/>
        </div>
    );
};

export default HomePage;