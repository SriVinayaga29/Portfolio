import React from "react";
import './Home.css'


import profileImage from "../logo/—Pngtree—data analyst flat style character_14060588.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons';





function Home() {
    return (
        <>
            <main>
                <div className='profile-image'>
                    <img src={profileImage} alt="profile_image" />
                </div>
                <div>
                    <div className='profile-content'>
                        <h1 className='name'>Hi, I'm <span className='name-span'>Mathan</span></h1>
                        <h2 className='skill'>I'm a <span className='skill-span'>Cybersecurity Analyst</span></h2>
                        <p>I’m Mathan, and I specialize in cybersecurity analysis. My passion lies in protecting organizations from cyber threats through thorough risk assessments and strategic security implementations.</p>
                        <div className='main-icons'>
                            <a href=""target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;