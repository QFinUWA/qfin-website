import React from 'react';

const Event = (children) => {
    return (
        <>
            <div className="Event">
                <h2 className="Event-header">{children.title}</h2>
                {children.image.length > 0 &&
                <img className="Event-image" src={children.image} alt={children.title} />
                }
                <p className="Event-desc"> <b>Description</b>: {children.desc}</p>
                {children.linkedin.length > 0 &&
                <p className="Event-linkedin-post"><b></b> <a href={children.linkedin} target="_blank" rel="noopener noreferrer">Linkedin Post</a></p>
                }
                {children.facebook.length > 0 &&
                <p className="Event-facebook-post"><b></b> <a href={children.facebook} target="_blank" rel="noopener noreferrer">Facebook Post</a></p>
                }
            </div>
        </>
    );
};

export default Event;

// <Event title="TBD"
//         image=""
//         desc="TBD"
//         linkedin="TBD"
//         facebook="TBD" />
