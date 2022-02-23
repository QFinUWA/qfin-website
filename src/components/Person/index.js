import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaRegEnvelope,
    FaFacebook,
    FaLink
} from 'react-icons/fa';

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
                    {children.pastRoles.length > 0 &&
                    <p className="Person-past-roles"><b>Past Roles</b>: {children.pastRoles}</p>
                    }
                </div>
                <div className="contact-icons">
                    {children.github.length > 0 &&
                    <a href={children.github} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <FaGithub className='contact-icon'/>
                    </a>
                    }
                    {children.linkedin.length > 0 &&
                    <a href={children.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <FaLinkedin className='contact-icon'/>
                    </a>
                    }
                    {children.website.length > 0 &&
                    <a href={children.website}
                    target="_blank"
                    rel="noopener noreferrer">
                        <FaLink className='contact-icon'/>
                    </a>
                    }
                    {children.twitter.length > 0 &&
                    <a href={children.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <FaTwitter className='contact-icon'/>
                    </a>
                    }
                    {children.facebook.length > 0 &&
                    <a href={children.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <FaFacebook className='contact-icon'/>
                    </a>
                    }
                    {children.email.length > 0 &&
                    <a href={"mailto:" + children.email}
                    target="_blank"
                    rel="noopener noreferrer">
                        <FaRegEnvelope className='contact-icon'/>
                    </a>
                    }
                </div>
            </div>
        </>
    );
};

export default Person;
