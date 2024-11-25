import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import './Navbar.css'


function NavBar() {
    return (
        <nav>
            <div className='heading'>
                <p>Mathan Subbiah</p>
            </div>
            <div className='navbar-links'>
                <div className='navbar-baricon'>
                    <FontAwesomeIcon className='navbar-baricon-bar' icon={faBars} />
                    <ul className='list'>
                        <li><Link to="Home" className='navbar-links-list-item' offset={-100} smooth={true}>Home</Link></li>
                        <li><Link to="About" className='navbar-links-list-item' offset={-100} smooth={true}>About</Link></li>
                        <li><Link to="Skills" className='navbar-links-list-item' offset={-100} smooth={true}>Skills</Link></li>
                        <li><Link to="Works" className='navbar-links-list-item' offset={-100} smooth={true}>Works</Link></li>
                        <li><Link to="Contact" className='navbar-links-list-item' offset={-100} smooth={true}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
