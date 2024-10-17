import React from "react";

import imgIam from '../assets/img_iam.jpg';

function Home() {
    return (
        <div className="hero-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgIam})` }}>
            <div className="hero-text">
                <h1>I am Vivek Chandra</h1>
                <p>And I'm a Programmer</p>
                <button>Hire me</button>
            </div>
        </div>
    );
}

export default Home;
