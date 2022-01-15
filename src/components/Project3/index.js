import React from 'react';

const Project3 = (children) => {
    return (
        <>
            <div className="Project">
                <h2 className="Project-header">{children.title}</h2>
                <p className="Project-desc"> Description: {children.desc}</p>
                <p className="Project-tools"> Tools: {children.tools}</p>
                <p className="Project-results"> Results: {children.results}</p>
                <p className="Project-repo">Repository: <a href={children.repo} target="_blank"> GitHub </a></p>
            </div>
        </>
    );
};

export default Project3;