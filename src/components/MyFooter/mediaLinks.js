import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';

// replace with FaDiscord?
import {
    BsDiscord
} from 'react-icons/bs';

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
        Logo: BsDiscord,  
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