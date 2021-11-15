import React from 'react';
import './Card.css';

function Card(props){
    return (
        <div className="card" id={props.id}>
            <div className="card-body">
                <img src={props.img} alt="Card" />
                <h2 className="card-title"> {props.title} </h2>
                <p className="card-text"> {props.text} </p>
            </div>
        </div>             
    );
};
    
export default Card;