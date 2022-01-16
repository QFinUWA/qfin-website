import React from 'react';

const Project = (children) => {
    return (
        <>
            <div className="Project">
                <h2 className="Project-header">{children.title}</h2>
                {children.image.length > 0 &&
                <img className="Project-image" src={children.image} alt={children.title} />
                }
                <p className="Project-DOT"><b>Director of Trading</b>: <a href={children.DOTlink} target="_blank"> {children.DOT} </a></p>
                <p className="Project-desc"> <b>Description</b>: {children.desc}</p>
                <p className="Project-tools"> <b>Technologies</b>: {children.tools}</p>
                {/* <p className="Project-repo-link"> <b>Repository</b>: <a href={children.repolink} target="_blank">{children.repolink}</a>{children.repo}</p> */}
                {children.repolink.length > 5 &&
                <p className="Project-repo-link"><b>Repository</b>: <a href={children.repolink} target="_blank"> GitHub </a></p>
                }      
            </div>
        </>
    );
};

export default Project;