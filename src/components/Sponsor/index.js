import React from 'react';

const Sponsor = (children) => {
    return (
        <>
            <div className="Sponsor">
                <div className="Sponsor-logo-container">
                    {children.logo.length > 0 &&
                    <a href={children.website} target="_blank" rel="noopener noreferrer"><img className="Sponsor-logo" src={children.logo} alt={children.name} /></a>
                    }
                </div>
                <h2 className="Sponsor-name">{children.name}</h2>
                <p className="Sponsor-desc"> <b>Description</b>: {children.desc}</p>
                {children.website.length > 5 &&
                <p className="Sponsor-website"><b>Sponsor Site</b>: <a href={children.website} target="_blank" rel="noopener noreferrer"> {children.name} </a></p>
                }      
            </div>
        </>
    );
};

export default Sponsor;