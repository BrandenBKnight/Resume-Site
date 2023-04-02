import React from "react";
import profilePicture from "../img/profile.png";

const About = () => {
  return (
    <section id="About" className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={profilePicture}
            alt="Branden Knight"
            className="img-fluid about-image"
          />
        </div>
        <div className="col-md-6 about-content">
          <h2>About Me</h2>
          <p>
            I'm an IT enthusiast with a solid foundation of 12 years in the
            technology realm, encompassing both my professional and personal
            experiences. Over the course of 5 years, I've honed my expertise in
            various tech-related roles, tackling complex electronic systems,
            building and configuring servers, as well as managing networks. My
            passion for cybersecurity and network management has driven me to
            create an extensive homelab, where I've set up and maintained over
            30 different services. This hands-on experience has equipped me with
            valuable knowledge and skills that I'm eager to apply in the world
            of cybersecurity analysis. When I'm not immersed in the digital
            landscape, I enjoy exploring innovative solutions to challenges and
            staying up-to-date with the latest trends in technology. I'm excited
            to share my journey with you and welcome you to my website, where
            you can learn more about my adventures in IT and cybersecurity. Feel
            free to reach out if you have any questions or if you're interested
            in discussing opportunities for collaboration. Let's connect and
            create a more secure digital future together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
