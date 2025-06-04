import React from "react";
import "./experience.css";
import codespeedy from "./data/codespeedy.pdf";
import codeimg from "./data/codeimg.png";
import plotchai from "./data/plotchai.pdf";
import plotimg from "./data/plotchimg.jpeg";

function Experience() {
    return (
        <div className="experience" id="experience">
            <div className="heading-ex atkinson-hyperlegible-bold" style={{ fontSize: "40px" }}>
                Experience <span className="bag">💼</span>
            </div>

            <div className="container-ex">
                <div className="title">
                    <div className="intern-heading atkinson-hyperlegible-bold">
                        Backend Developer Intern: <a href="https://www.plotch.ai/" className="Links">Plotchai</a>
                    </div>
                    <div className="time">
                        Apr 2025 - May 2025
                    </div>
                </div>
                
                <a href={plotchai} className="image-wrapper">
                    <img className="im" src={plotimg} alt="Plotchai Internship Certificate" />
                    <span className="certificate-label">☝️ Click to view certificate</span>
                </a>
                
                <div className="about">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>
                        Plotchai, a fast-growing startup collaborating with companies like Snapdeal and Paytm, provided me the opportunity to work on a real-world e-commerce backend system. As a Backend Developer, I designed RESTful APIs, managed MongoDB data models, and integrated with Snapdeal's systems.
                    </p>
                </div>
            </div>

            <div className="container-ex">
                <div className="title">
                    <div className="intern-heading atkinson-hyperlegible-bold">
                        Python Developer: <a href="https://www.codespeedy.com/" className="Links">CodeSpeedy</a>
                    </div>
                    <div className="time">
                        Jun 2024 - Oct 2024
                    </div>
                </div>
                
                <a href={codespeedy} className="image-wrapper">
                    <img className="im" src={codeimg} alt="CodeSpeedy Internship Certificate" />
                    <span className="certificate-label">☝️ Click to view certificate</span>
                </a>
                
                <div className="about">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>
                        CodeSpeedy is an IT company specializing in coding solutions and various IT services, including web and software development. As a Python Developer, I collaborated with my team to design and develop an API and a simple GUI application for payment processing.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experience;