import React from 'react';
import './Card.css';

function Card({ id, img, title, text }){
    return (
        <div className="card" id={id}>
            <div className="card-body">
                <img src={img} alt="Card" />
                <h2 className="card-title"> {title} </h2>
                <p className="card-text"> {text} </p>
            </div>
        </div>             
    );
};
    
export default Card;