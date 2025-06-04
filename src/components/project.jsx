import React from "react";
import "./project.css"
import erpimg from "./data/Erpimg.png"
import facialimg from "./data/Facialimg.png"
import wander from "./data/Wanderlustimg.png"
function Project() {
    return (
        <div className="project" id="project">
            <div className="heading atkinson-hyperlegible-bold" style={{ fontSize: "45px" }}>
                Projects <span className="pro">🏗️</span>
            </div>
            <div className="container-pr">
                <div className="project-title atkinson-hyperlegible-bold">
                    Cbit ERP <div><a href="https://github.com/VivekGaddam/Erp-attendance ">GitLink</a></div>
                </div>
                <div className="imag">
                    <a href="https://erp-frontend-qn2y.onrender.com/"><img src={erpimg} style={{ width: "610px", height: "250px" }} alt="" /></a>
                    <div className="click" >☝️Click</div>
                </div>
                <div className="para">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>I developed a comprehensive college management website that uses web scraping to extract data from the original college site and integrates advanced features like a leave tracker to help maintain attendance above 75%, a semester credit calculator, session caching, and seamless Google integration. By addressing the limitations of the original site, my project provides a modern, efficient, and user-friendly platform tailored to students' needs.</p>
                </div>

            </div>
            <div className="container-pr">
                <div className="project-title atkinson-hyperlegible-bold">
                    Face Recognition Attendance System <span><a href="https://github.com/VivekGaddam/Face-Recognition-Attendance-System-main ">GitLink</a></span>
                </div>
                <div className="imag">
                    <a href="https://erp-frontend-qn2y.onrender.com/"><img src={facialimg} style={{ width: "610px", height: "250px" }} alt="" /></a>
                    <div className="click" >☝️Click</div>
                </div>
                <div className="para">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>I developed a Face Recognition Attendance System combining Python and React. The Python backend integrates libraries like OpenCV and Flask, implementing features such as facial recognition using machine learning models (trained with K-Nearest Neighbors), automated attendance marking, and a CSV-based attendance record. Web scraping techniques and SQLite are used for efficient data management.

                        The React frontend provides a modern, user-friendly interface for students and administrators, making it easy to register users, view attendance records, and track daily activities. This project streamlines the attendance process with accurate face detection and a visually appealing UI.</p>
                </div>

            </div>
            <div className="container-pr">
                    <div className="project-title atkinson-hyperlegible-bold">
                        WanderLustWays <span><a href="https://github.com/VivekGaddam/WanderLustWays ">GitLink</a></span>
                    </div>
                    <div className="imag">
                        <a href="https://wanderlust-ways.web.app/"><img src={wander} style={{ width: "610px", height: "250px" }} alt="" /></a>
                        <div className="click" >☝️Click</div>
                    </div>
                    <div className="para">
                        <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>I collaboratively developed WanderLust Ways, a travel-centric web application, during a hackathon using the MERN stack, Google Maps API, and TravelAssistant.ai. The platform features an intelligent travel chatbot to assist users in planning their journeys, advanced smart filters for personalized destination recommendations, and seamless user authentication via OAuth. This project combines cutting-edge technologies to create an engaging and efficient travel experience.</p>
                    </div>

                </div>
            
        </div>

    );
}
export default Project