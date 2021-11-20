import React from 'react';
import facebooklogo from "../assets/Facebook-Logo-Invert.png";
import linkedinlogo from "../assets/Linkedin-Logo-Invert.png";
import githublogo from "../assets/GitHub-Logo-Invert.png";
import uwalogo from "../assets/UWA-Logo-Invert.png";
import "./FooterImgs.css"


const MyFooter = () => {
    return (
        <>
            <footer className="footer">
                <h2>This is footer, Contact Stuff will go here</h2>
                <a href="https://www.facebook.com/QFinUWA/" target="_blank" rel="noopener noreferrer">
                    <img class="link-photos" id="facebook-img" src={facebooklogo} alt="QFin Facebook Page" />
                </a>
                <a href="https://www.linkedin.com/company/qfin-uwa/" target="_blank" rel="noopener noreferrer">
                    <img class="link-photos" id="linkedin-img" src={linkedinlogo} alt="QFin LinkedIn Page" />
                </a>
                <a href="https://github.com/QFinUWA" target="_blank" rel="noopener noreferrer">
                    <img class="link-photos" id="github-img" src={githublogo} alt="QFin GitHub" />
                </a>
                <a href="https://www.uwastudentguild.com/clubs/qfin-uwa" target="_blank" rel="noopener noreferrer">
                    <img class="link-photos" id="uwa-img" src={uwalogo} alt="QFin UWA Guild" />
                </a>
            </footer>
        </>
    );
};
    
export default MyFooter;