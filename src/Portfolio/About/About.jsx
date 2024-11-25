import React from "react";
import Image from "../logo/—Pngtree—data analyst flat style character_14060588.png";
import './About.css'


function About() {
    return (

        <about>
            <div className="image">
                <h1>About</h1>
                <img src={Image} alt="about_image"></img>
            </div>
            <div>
                <div className="content">
                    <p>Welcome to My Digital Security Hub!<br></br>

                        As a cybersecurity analyst, my mission is to safeguard sensitive information and ensure robust security measures are in place. With expertise in risk assessment and incident management, I am dedicated to staying ahead of evolving threats.
                        Browse my portfolio to learn more about my work and how I can support your security goals.

                        My goal is to create resilient security frameworks that not only defend against attacks but also promote a culture of security awareness within organizations.</p>
                </div>
            </div>
        </about>




    )

}
export default About;