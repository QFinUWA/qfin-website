import React from 'react';
import '../Card.css';

// children should be of type Card
function Container({ children }) {
    return (
        <div className="card-container">
            {children}
        </div>
    );
}; 

export default Container;