import React from 'react';
import './Card.css';

function Container(props) {
    return (
        <div className="card-container">
            {props.children}
        </div>
    );
};

export default Container;