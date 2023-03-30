import React from "react";

const Skills = () => {
  const skills = [
    "Operating Systems - Windows, Linux, MacOS",
    "Networking - TCP/IP, DNS, DHCP, VPNs",
    "Security - SSL/TLS, 2FA, Password Management, Encryption, Least Privilege",
    "Virtualization - Docker, VMWare, Hyper-V, Citrix, XenServer",
    "Database - SQL, MySQL, PostgreSQL, MongoDB, MariaDB",
    "Programming Languages - Python",
    "Web Development - HTML, CSS, JavaScript, Bootstrap",
    "Project Management - Methodologies, Prioritization, Resource Management, Collaboration",
    "Problem Solving - Troubleshooting, Root Cause Analysis, Logical/Critical Thinking, Creative and Innovative Solutions, Documentation",
    "Communication Skills - Active Listening and Comprhension, Clear/Consise Written Communication, Effective Verbal Communication",
  ];

  return (
    <section className="container py-5">
      <h2>Skills</h2>
      <ul className="list-unstyled d-flex flex-wrap">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="mx-2 my-1 px-3 py-1 bg-secondary text-white rounded"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
