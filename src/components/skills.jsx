import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./skills.css";

function Skills() {
  const containerRef = useRef(null); // Reference for the skills container

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    const items = containerRef.current.querySelectorAll(".lang"); // Select all skill items

    gsap.fromTo(
      items,
      { opacity: 0, y: 50 }, // Start: hidden and below initial position
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // Duration of each animation
        stagger: 0.2, // Time delay between each item
        ease: "power3.out", // Smooth easing effect
        scrollTrigger: {
          trigger: containerRef.current, // Element to trigger animation
          start: "top 80%", // Start when the top of the container is 80% of the viewport height
          toggleActions: "play none none none", // Play animation on scroll
        },
      }
    );
  }, []);

  return (
    <div className="skills">
      <div
        className="heading atkinson-hyperlegible-bold"
        style={{ fontSize: "40px" }}
      >
        Skills
        <span className="brain">🧠</span>
      </div>
      <div className="container-skills" ref={containerRef}>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="python"
          />
          <span>Python</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
          />
          <span>React</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            alt="NodeJs"
          />
          <span>NodeJs</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <span>JavaScritpt</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
            alt="Flask"
          />
          <span>Flask</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
          />
          <span>Mongodb</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
          />
          <span>Postgresql</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <span>Html</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <span>Css</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
          />
          <span>Tailwindcss</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            alt="Express"
          />
          <span>express</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
            alt="ScikitLearn"
          />
          <span>ScikitLearn</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
            alt="TensorFlow"
          />
          <span>TensorFlow</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
            alt="jQuery"
          />
          <span>JQuery</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            alt="Git"
          />
          <span>Git</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
          />
          <span>BootStrap</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
            alt="C"
          />
          <span>C</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
            alt="Docker"
          />
          <span>Docker</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg"
            alt="Latex"
          />
          <span>Latex</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
            alt="Matplotlib"
          />
          <span>Matplotlib</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
            alt="Postman"
          />
          <span>PostMan</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
            alt="Pandas"
          />
          <span>Pandas</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"
            alt="OpenCV"
          />
          <span>OpenCV</span>
        </div>
        <div className="lang">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
            alt="Material UI"
          />
          <span>MaterialUI</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
