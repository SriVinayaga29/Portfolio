
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
 import './Contact.css';
 import resume from "../logo/Resume.pdf";


function Contact() {
    return (
        <>
         <div className="heading">
                    <h1>CONTACT ME</h1>
                </div>
            <div className="container">
               
                <div className="contact-left">
                    <form action="" className='form'>
                        <input type="text" placeholder="Enter your name" />
                        <input type="text" placeholder="Enter your email" />
                        <textarea name="" id="" placeholder='Your message'></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>

                <div className="contact-right">
                    <div className='mail'>
                        <p><FontAwesomeIcon icon={faEnvelope} /> mathan0987654321@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPhone} /> +91 9840892153</p>
                    </div>
                    <div className='icons'>
                        <a href="https://www.linkedin.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://www.github.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                    <div className='cv'>
                        <a href={resume} download className='cv'>Download Resume</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
