import React, { useEffect, useRef } from "react";
import "./home.css";
import Typed from "typed.js";

function Home() {
  const typedElement = useRef(null); // Create a ref for the span element

  useEffect(() => {
    // Initialize Typed.js on the referenced span element
    const options = {
      strings: ["Web Development", "Machine Learning", "Python"],
      typeSpeed: 50,    // Speed of typing
      backSpeed: 50,    // Speed of backspacing
      backDelay: 1000,  // Delay before starting backspacing
      loop: true,       // Loop the typing effect
    };

    const typed = new Typed(typedElement.current, options);

    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Home">
      <div className="hero-name atkinson-hyperlegible-bold">
        <div className="colorname">
          Hello ! <span id="waving-hand">👋</span>, I'm Vivek Chandra Reddy
        </div>
        <br />
        </div>
        <div className="anime atkinson-hyperlegible-regular">
            Interested In-
        </div>
        <div className="anime atkinson-hyperlegible-bold" ref={typedElement}></div> 
      
    </div>
  );
}

export default Home;
