import React from 'react';
import mediaLinks from './mediaLinks';


const mailQfin = () => {
    if (typeof window !== 'undefined') {
        window.location.href="mailto:admin@qfinuwa.com";
    }
}


const MyFooter = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <h2 id="footer-header">Contact Us</h2>
                    <p>
                        <button onClick={mailQfin}>Email Us</button>  <br/>
                        admin@qfinuwa.com
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