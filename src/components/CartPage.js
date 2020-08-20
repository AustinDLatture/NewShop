import React from 'react';

import Card from './Card';

const CartPage = () => {
    const items = [
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
        }
    ]

    return (
        <div className="cart-list">
            <ul>
                {items.map(item => 
                    <li>
                        <Card
                            id={item.id}
                            inCart
                            name={item.name}
                            price={item.price}
                        />  
                    </li>        
                )}
            </ul>
        </div>
    );
};

export default CartPage;