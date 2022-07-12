import React from 'react';
import bannerimg from "../assets/QFin LinkedIn Banner Thinner.png";
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <>
        <div style={{backgroundColor: "rgb(63,63,63)"}}>
            <NavLink to="/home" style={{margin:"auto"}}><img className="banner"  src={bannerimg} alt="QFin Banner" width="1920px" height="263px" /></NavLink>
        </div>
        </>
    );
};
    
export default Banner;