import React from 'react';
import {
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';

const Event = (children) => {
    return (
        <>
            <div className="Event">
                <h2 className="Event-header">{children.title}</h2>
                {children.image.length > 0 &&
                <img className="Event-image" src={children.image} alt={children.title} />
                }
                <p className="Event-date"><b>Date</b>: {children.date}</p>
                <p className="Event-desc"> <b>Description</b>: {children.desc}</p>
                <p className="Event-attendees"><b>Attendees</b>: {children.attendees}</p>
                {/* {children.linkedin.length > 0 &&
                <p className="Event-linkedin-post"><b></b> <a href={children.linkedin} target="_blank" rel="noopener noreferrer">Linkedin Post</a></p>
                } */}
                {children.facebook.length > 0 &&
                <a href={children.facebook} 
                target="_blank" 
                rel="noopener noreferrer">
                    <FaFacebook className='contact-icon'/>
                </a>
                }
                {children.linkedin.length > 0 &&
                <a href={children.linkedin} 
                target="_blank" 
                rel="noopener noreferrer">
                    <FaLinkedin className='contact-icon'/>
                </a>
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
