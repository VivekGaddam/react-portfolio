import React, { useEffect } from "react";

function About() {
    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }, []);

    const scrollFunction = () => {
        const header = document.getElementById("header");
        const aboutSection = document.querySelector(".about-section");
        const aboutSectionRect = aboutSection.getBoundingClientRect();
        if (aboutSectionRect.top <= window.innerHeight / 2 && aboutSectionRect.bottom >= window.innerHeight / 2)  {
            header.style.fontSize = "40px"; 
        } else {
            header.style.fontSize = "90px";
        }
    };

    return (
        <div className="about-section">
            <div id="header">About</div>
            <p>
                Hello! I'm Vivek Chander, a passionate 2nd-year BE Computer Science student with a strong interest in full-stack web development, machine learning, and artificial intelligence. I specialize in building efficient, scalable applications using modern technologies like the MERN stack (MongoDB, Express.js, React.js, and Node.js). My work extends to developing APIs and AI chatbots, and integrating services like Mailchimp for email verification.

                As a Python developer, I've worked on various projects, including handwriting recognition using TensorFlow, and I've completed internships in AI/ML and data science. I enjoy leveraging my experience in both web development and machine learning to create innovative solutions.

                Some of my key projects include:
                <ul>
                    <li>A Travel and Tourism website built with the MERN stack.</li>
                    <li>A portfolio website with dark mode aesthetics.</li>
                    <li>Handwritten Text Recognition using advanced TensorFlow models.</li>
                    <li>A quiz app built using PostgreSQL and EJS.</li>
                </ul>
                I am always eager to learn new technologies and explore new domains, and I'm excited about what the future holds in tech. Feel free to reach out if you're looking for collaboration or want to hire me!
            </p>
        </div>
    );
}

export default About;
