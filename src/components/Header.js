import React from "react";

const Header = () => {
	return (
		<header className="navbar-container bg-dark text-white py-3">
			<div className="navbar-inner">
				<div className="flex-container">
					<div className="navbar-logo">
						<a className="navbar-brand" href="#">
							Branden Knight
						</a>
					</div>
					<div className="center-container">
						<nav className="navbar-social-links">
							<a
								href="https://www.linkedin.com/in/brandenbknight/"
								target="_blank"
								className="btn btn-linkedin">
								<i className="fa-brands fa-linkedin"></i>
								LinkedIn
							</a>
							<a
								href="https://github.com/BrandenBKnight"
								target="_blank"
								className="btn btn-github">
								<i className="fa-brands fa-github"></i>
								GitHub
							</a>
							<a
								href="Branden Knight - Resume.pdf"
								target="_blank"
								className="btn btn-resume">
								<i className="fa-regular fa-file"></i>
								Resume
							</a>
						</nav>
					</div>
					<div className="right-container">
						<nav className="navbar-main-menu">
							<ul>
								<li>
									<a href="#About">About Me</a>
								</li>
								<li>
									<a href="#Skills">Skills</a>
								</li>
								<li>
									<a href="#Experience">Experience</a>
								</li>
								<li>
									<a href="#Certifications">Certifications</a>
								</li>
								<li>
									<a href="#Education">Education</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
