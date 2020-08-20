import PropTypes from 'prop-types';
import React from 'react';

const Card = ({ name, id, price, inCart }) => {

    return (
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">{inCart ? 'Remove from Cart' : 'Add to Cart'}</a>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    inCart: PropTypes.bool,
    price: PropTypes.number
};

export default Card;