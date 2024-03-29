import React from 'react';
import mediaLinks from './mediaLinks';


const mailQfin = () => {
    if (typeof window !== 'undefined') {
        window.location.href="mailto:qfinuwa@gmail.com";
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
                <div>
                    <p className="content" style={{textAlign: "center", margin: "2px 0", }}>Website created with ♥ (and React.js) by <a href="https://github.com/JakeLDev" target="_blank" rel="noreferrer">Jake Lyell</a>, <a href="https://github.com/itbergl" target="_blank" rel="noreferrer">Isaac Bergl</a> and <a href="https://github.com/cookies-xor-cream" target="_blank" rel="noreferrer">Arya Gerami Zadegan</a></p>
                </div>
            </footer>
        </>
    );
};
    
export default MyFooter;