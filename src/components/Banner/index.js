import React from 'react';
import bannerimg from "../assets/QFin LinkedIn Banner Thinner.png";
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <>
            <NavLink to="/home"><img className="banner" src={bannerimg} alt="QFin Banner" /></NavLink>
        </>
    );
};
    
export default Banner;