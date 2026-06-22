import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact</h2>

            <p className="contact-text">
                Open to internship opportunities and collaboration.
            </p>

            <div className="contact-card">
               
                    <div className="contact-item"> <a href="mailto:kripa215@gmail.com">
                        <h3>Email</h3>
                        kripa215@gmail.com"
                        </a>
                    </div>
                
                <div className="contact-item">
                      <a
                        href="https://github.com/kripa2061"
                        target="_blank"
                        rel="noreferrer"
                    >
                    <h3>GitHub</h3>
                  github.com/kripa2061
                    </a>
                </div>

                <div className="contact-item">
                    <h3>LinkedIn</h3>
                    <a
                        href="https://www.linkedin.com/in/kripa-bastola-40a816318"
                        target="_blank"
                        rel="noreferrer"
                    >
                        linkedin.com/in/kripa-bastola
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Contact;