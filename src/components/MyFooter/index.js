import React from 'react';
import facebooklogo from "../assets/Facebook-Logo-Invert.png";
import linkedinlogo from "../assets/Linkedin-Logo-Invert.png";
import githublogo from "../assets/GitHub-Logo-Invert.png";
import uwalogo from "../assets/UWA-Logo-Invert.png";
import discordlogo from "../assets/Discord-Logo-Invert.png";
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
                    <a href="https://www.uwastudentguild.com/clubs/qfin-uwa" target="_blank" rel="noopener noreferrer">
                        <img class="link-photos" id="uwa-img" src={uwalogo} alt="QFin UWA Guild" />
                    </a>
                    <a href="https://discord.gg/pzfasHAFAn" target="_blank" rel="noopener noreferrer">
                        <img class="link-photos" id="discord-img" src={discordlogo} alt="QFin Discord Server" />
                    </a>
                    <a href="https://www.facebook.com/QFinUWA/" target="_blank" rel="noopener noreferrer">
                        <img class="link-photos" id="facebook-img" src={facebooklogo} alt="QFin Facebook Page" />
                    </a>
                    <a href="https://www.linkedin.com/company/qfin-uwa/" target="_blank" rel="noopener noreferrer">
                        <img class="link-photos" id="linkedin-img" src={linkedinlogo} alt="QFin LinkedIn Page" />
                    </a>
                    <a href="https://github.com/QFinUWA" target="_blank" rel="noopener noreferrer">
                        <img class="link-photos" id="github-img" src={githublogo} alt="QFin GitHub" />
                    </a>
                    </div>
                </div>
            </footer>
        </>
    );
};
    
export default MyFooter;