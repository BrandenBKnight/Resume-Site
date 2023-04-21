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
					<h1>About Me</h1>
					<p>
						From my early days of tinkering with devices like Xbox 360s,
						iPhones, and laptops, my interest in technology has always been a
						driving force in my life. After graduating high school, I embarked
						on a journey in tech and IT roles, where I spent 5 years honing my
						skills and developing a strong foundation in the field. Following my
						time in the tech industry, I joined the Air Force where I served for
						4 years on active duty. During my service in the Air Force, I was
						responsible for maintaining nuclear missiles, which significantly
						broadened my technical expertise and honed my analytical abilities.
						My time in the military also provided me with valuable opportunities
						to develop leadership skills, as I took charge of diverse teams
						throughout my career. During my time in tech school, I continued to
						repair and resell phones, as well as fix laptops and build PCs for
						fellow airmen. As I moved to my permanent duty station, my
						dedication to learning didn't wane; I pursued my education full-time
						while also creating a comprehensive homelab, which further fueled my
						enthusiasm for cybersecurity and network management. Now, as I
						transition out of the Air Force, I'm excited to embark on a new
						chapter in my career, seeking a fulfilling role in cybersecurity. I
						hope that sharing my journey on this website gives a sense of who I
						am and the value I can bring to your organization. I welcome you to
						explore my website to learn more about my experiences and passions,
						and please don't hesitate to reach out if you have any questions or
						would like to discuss potential opportunities. Together, let's work
						towards a more secure digital future.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
