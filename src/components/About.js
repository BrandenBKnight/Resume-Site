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
						My lifelong fascination with technology began during my early
						teenage years as I delved into modifying devices such as Xbox 360s,
						iPhones, and laptops. This curiosity became a driving force in my
						life, leading me into various tech and IT roles after graduating
						high school. Over a span of 5 years, I refined my skills and
						established a solid foundation in the tech industry.
					</p>
					<p>
						Further enriching my knowledge, I joined the Air Force, where I
						served 4 years on active duty. This opportunity allowed me to expand
						my technical expertise as I was entrusted with the maintenance of
						nuclear missiles. Alongside this, I also honed my analytical skills
						and acquired valuable leadership experience by leading diverse teams
						throughout my tenure.
					</p>
					<p>
						Even in the military environment, my passion for technology never
						diminished. During tech school, I continued repairing and reselling
						phones, mending laptops, and building PCs for fellow airmen. As I
						transitioned to my permanent duty station, my dedication to constant
						learning and growth remained unwavering. I pursued a full-time
						education while simultaneously setting up a comprehensive homelab.
						This endeavor further stoked my enthusiasm for technology,
						specifically in areas of cybersecurity and network management.
					</p>
					<p>
						As a lifelong learner, I constantly seek opportunities to broaden my
						knowledge and refine my skills. As I transition out of the Air
						Force, I am thrilled to embark on a new chapter in my career,
						specifically targeting a fulfilling role in IT Management.
					</p>
					<p>
						Sharing my journey on this website offers a glimpse of who I am and
						the value I can bring to your organization. I encourage you to
						explore my website to learn more about my experiences, skills, and
						passions. Should you have any questions or wish to discuss potential
						opportunities, please do not hesitate to reach out.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
