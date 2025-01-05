import React from "react";
import "./contact.css"
function Contact() {
    return (
        <div className="contact">
            <div className="heading atkinson-hyperlegible-bold" style={{ fontSize: "45px" }}>Contact <span className="con">☎️</span></div>
            <section
                style={{
                    width: "min-content",
                    maxWidth: "100%",
                    overflowX: "auto",
                }}
            >
                <pre
                    style={{
                        margin: "0",
                        lineHeight: "125%",
                        fontSize: "1.125rem",
                    }}
                >
                    <span style={{ color: "#66d9ef" }}>const</span>{" "}
                    <span style={{ color: "#a6e22e" }}>Vivek</span>{" "}
                    <span style={{ color: "#f92672" }}>=</span>{" "}
                    <span style={{ color: "#66d9ef" }}>new</span>{" "}
                    <span style={{ color: "#a6e22e" }}>Person</span>
                    <span style={{ color: "#f8f8f2" }}>({"{"}</span>
                    <br />
                    {"    "}
                    <span style={{ color: "#a6e22e" }}>email</span>
                    <span style={{ color: "#f92672" }}>:</span>{" "}
                    <a
                        href="mailto:vivekgaddam02@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#e6db74" }}
                    >
                        "vivekgaddam02@gmail.com"
                    </a>
                    <span style={{ color: "#f8f8f2" }}>,</span>
                    <br />
                    {"    "}
                    <span style={{ color: "#a6e22e" }}>github</span>
                    <span style={{ color: "#f92672" }}>:</span>{" "}
                    <a
                        href="https://github.com/VivekGaddam"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#e6db74" }}
                    >
                        "VivekGaddam"
                    </a>
                    <span style={{ color: "#f8f8f2" }}>,</span>
                    <br />
                    {"    "}
                    <span style={{ color: "#a6e22e" }}>linkedin</span>
                    <span style={{ color: "#f92672" }}>:</span>{" "}
                    <a
                        href="https://www.linkedin.com/in/gaddamvivekchandrareddy/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#e6db74" }}
                    >
                        "gaddamvivekchandrareddy"
                    </a>
                    <span style={{ color: "#f8f8f2" }}>,</span>
                    <br />
                    {"    "}
                    <span style={{ color: "#a6e22e" }}>Twitter</span>
                    <span style={{ color: "#f92672" }}>:</span>{" "}
                    <a
                        href="https://x.com/Vivek_Gaddam_"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#e6db74" }}
                    >
                        "Vivek_Gaddam_"
                    </a>
                    <span style={{ color: "#f8f8f2" }}>{"}"})</span>
                    ;
                </pre>
            </section>
        </div>
    );
}

export default Contact;
