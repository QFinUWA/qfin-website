import React from 'react';
import mediaLinks from './mediaLinks';

import "./FooterImgs.css"

const MyFooter = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <h2 id="footer-header">Contact Us</h2>
                    <p>
                        <button onclick='location.href="mailto:qfinuwa@gmail.com";'>Email Us</button>  <br/>
                        qfinuwa@gmail.com
                    </p>
                    <div className="footer-icons">
                        {mediaLinks.map((media) => 
                            <a 
                                href={media.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <media.Logo
                                    className="link-photos"
                                    id={media?.id}
                                />
                            </a>
                        )}
                    </div>
                </div>
            </footer>
        </>
    );
};
    
export default MyFooter;