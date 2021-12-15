import React from 'react';
// import "./team.css";
// component for each team member card
const Person = (children) => {
    return (
        <>
            <div className="Person">
                <div className="Person-image-container">
                    <img className="Person-image" src={children.image} alt={children.name} />
                </div>
                <div className="Person-info">
                    <h2 className="Person-name">{children.name}</h2>
                    <p className="Person-title">{children.title}</p>
                    <p className="Person-desc">{children.desc}</p>
                    <p className="Person-repo">{children.repo}</p>
                </div>
            </div>

        </>
    );
};

export default Person;
