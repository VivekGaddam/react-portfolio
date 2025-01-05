import React from "react";
import "./experience.css"
import eduskills from "./data/eduskills.pdf"
import eduimg from "./data/eduskillsimg.png"
import codespeedy from "./data/codespeedy.pdf"
import codeimg from "./data/codeimg.png"
function Experience(){
    return (
        <div className="experiance">
            <div className="heading-ex atkinson-hyperlegible-bold " style={{ fontSize: "40px" }}>
                Experience <span className="bag">💼</span>
            </div>
            <div className="container-ex">
                <div className="title">
                <div className="intern-heading atkinson-hyperlegible-bold " style={{fontSize:"18px"}}>GOOGLE AI-ML VIRTUAL INTERNSHIP AT :  <a href="https://eduskillsfoundation.org/" className="Links">EduSkills</a></div>
                <div className="time">
                Jul 2024 - Sep 2024
                </div>
                </div>
                <a href={eduskills} style={{display:"flex",flexDirection:"column",alignItems:"center"}}> <img className="im" src={eduimg} alt="v" />☝️Click</a>
                <div className="about">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>EduSkills, a non-profit organization, empowers Indian students to gain hands-on experience in cutting-edge technologies. During this internship, I worked with TensorFlow on projects involving neural networks and image detection. The program provided access to Google Developer lectures, enhancing my understanding of AI/ML concepts. </p>
                </div>
            </div>
            <div className="container-ex">
                <div className="title">
                <div className="intern-heading atkinson-hyperlegible-bold" style={{fontSize:"20px"}}>Python Developer :  <a href="https://www.codespeedy.com/" className="Links">CodeSpeedy</a></div>
                <div className="time">
                Jun 2024 - Oct 2024
                </div>
                </div>
                <a href={codespeedy} style={{display:"flex",flexDirection:"column",alignItems:"center"}}> <img className="im" src={codeimg} alt="v" />☝️Click</a>
                <div className="about">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>CodeSpeedy is an IT company specializing in coding solutions and various IT services, including web and software development. As a Python Developer, I collaborated with my team to design and develop an API and a simple GUI application for payment processing, ensuring functionality and user-friendliness. </p>
                </div>
            </div>
        </div>
    );
}
export default Experience