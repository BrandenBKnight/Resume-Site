import React from "react";
import About from "./About";
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Skills from "./Skills";

const App = () => {
	return (
		<>
			<Header />
			<About />
			<Skills />
			<Experience />
			<Certifications />
			<Education />
			<Footer />
		</>
	);
};

export default App;
