import React from "react";

const Certifications = () => {
	const certifications = [
		{
			title: "ITF+",
			provider: "CompTIA",
			date: "December 2022",
			status: "earned",
			verificationLink: "https://verify.CompTIA.org",
			verificationCode: "YNY7CTZ5DMV1QFCF",
		},
		{
			title: "A+",
			provider: "CompTIA",
			date: "Expected Completion: August 2023",
			status: "studying",
		},
		{
			title: "Network+",
			provider: "CompTIA",
			date: "Expected Completion: October 2023",
			status: "studying",
		},
		{
			title: "Security+",
			provider: "CompTIA",
			date: "Expected Completion: December 2023",
			status: "studying",
		},
	];

	return (
		<section id="Certifications" className="container py-5">
			<h1 className="section-title">Certifications</h1>
			{certifications.map((certification, index) => (
				<div key={index} className="certification-item">
					<h3>
						{certification.title}
						{certification.status === "studying" && " (Currently Studying)"}
					</h3>
					<h4>{certification.provider}</h4>
					<p>{certification.date}</p>
					{certification.status === "earned" && (
						<p>
							<a
								href={certification.verificationLink}
								target="_blank"
								rel="noopener noreferrer">
								Verification Link
							</a>
						</p>
					)}
					{certification.verificationCode && (
						<p>Verification Code: {certification.verificationCode}</p>
					)}
				</div>
			))}
		</section>
	);
};

export default Certifications;
