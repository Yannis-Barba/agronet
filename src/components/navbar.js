import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
        <div className="navBar">
            <div id="logo" className="logo">Logo</div>
            <h1 className="agroNetTitle">AgroNet</h1>
            <div className="linksContainer">
                <Link to="/pages/home" className="links linksNavBar"> Home </Link>
                <Link to="/pages/ancienstage" className="links linksNavBar"> Ancien Stage </Link>
                <Link to="/pages/offrestage" className="links linksNavBar"> Offre de Stage </Link>
                <Link to="/pages/evenements" className="links linksNavBar"> Evenements </Link>
            </div>
        </div>
    )
}

export default NavBar;