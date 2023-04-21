import React from "react";

const Skills = () => {
	const skillCategories = [
		{
			title: "Cloud & Virtualization",
			skills: ["Docker", "VMWare"],
		},
		{
			title: "Cybersecurity Tools",
			skills: ["Wireshark", "Nmap", "pfBlockerNG", "Kali Linux", "Snort"],
		},
		{
			title: "Database",
			skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "MariaDB"],
		},
		{
			title: "Networking",
			skills: ["TCP/IP", "DNS", "DHCP", "VPNs", "Firewalls"],
		},
		{
			title: "Operating Systems",
			skills: ["Windows", "Linux", "MacOS"],
		},
		{
			title: "Programming Languages",
			skills: ["Python", "JavaScript", "Bash", "PowerShell"],
		},
		{
			title: "Risk Management",
			skills: [
				"Risk Assessment",
				"Vulnerability Scanning",
				"Threat Modeling",
				"Incident Response",
			],
		},
		{
			title: "Security Concepts",
			skills: ["Cryptography", "Access Control", "Intrusion Detection"],
		},
		{
			title: "Web Development",
			skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
		},
	];

	return (
		<section id="Skills" className="container py-5">
			<h1>Skills</h1>
			<div className="skills-wrapper">
				<div className="skills-grid">
					{skillCategories.map((category, index) => (
						<div key={index} className="skills-category">
							<h3 className="skills-category-title">{category.title}</h3>
							<ul className="skills-list">
								{category.skills.map((skill, i) => (
									<li key={i}>{skill}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
