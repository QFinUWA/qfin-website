import React from 'react';

const Project = (children) => {
    return (
        <>
            <div className="Project">
                <h2 className="Project-header">{children.title}</h2>
                <p className="Project-desc"> Description: {children.desc}</p>
                <p className="Project-tools"> Tools: {children.tools}</p>
                <p className="Project-results"> Results: {children.results}</p>
                <p className="Project-repo"> Repository: {children.repo}</p>
            </div>
        </>
    );
};

export default Project;