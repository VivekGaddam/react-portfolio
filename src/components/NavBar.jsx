import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <div className="dropdown">
                <button className="dropbtn">Projects
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                </button>
                <div className="dropdown-content">
                    <div className="header">
                        <h2>Projects</h2>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h3>Machine Learning</h3>
                            <a href="#">Project 1</a>
                            <a href="#">Project 2</a>
                            <a href="#">Project 3</a>
                        </div>
                        <div className="column">
                            <h3>Web Development</h3>
                            <a href="#">Project 1</a>
                            <a href="#">Project 2</a>
                            <a href="#">Project 3</a>
                        </div>
                        <div className="column">
                            <h3>DSA</h3>
                            <a href="#">Project 1</a>
                            <a href="#">Project 2</a>
                            <a href="#">Project 3</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#contact">Contact Me</a>
        </div>
    );
}

export default Navbar;
