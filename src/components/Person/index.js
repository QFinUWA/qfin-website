import React from 'react';

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
                    <h3 className="Person-title">{children.title}</h3>
                    <p className="Person-desc">{children.desc}</p>
                    <p className="Person-repo">{children.repo}</p>
                </div>
            </div>

        </>
    );
};

export default Person;
