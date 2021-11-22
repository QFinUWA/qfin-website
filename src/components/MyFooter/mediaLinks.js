import {
    FaGithub,
    FaLinkedin,
    FaDiscord,
    FaFacebook,
} from 'react-icons/fa';

import UWALogo from '../Logos/UWA';

const mediaLinks = [
    {
        Logo: FaGithub,   
        id: "github-img",
        href:  "https://github.com/QFinUWA"
    },
    {
        Logo: FaLinkedin, 
        id: "linkedin-img",
        href: "https://www.linkedin.com/company/qfin-uwa/"
    },
    {
        Logo: FaDiscord,  
        id: "discord-img",
        href: "https://www.facebook.com/QFinUWA/"
    },
    {
        Logo: FaFacebook, 
        id: "facebook-img",
        href: "https://discord.gg/pzfasHAFAn"
    },
    {
        Logo: UWALogo,    
        id: "uwa-img",
        href: "https://www.uwastudentguild.com/clubs/qfin-uwa"
    },
];

export default mediaLinks;