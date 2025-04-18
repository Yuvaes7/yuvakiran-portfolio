import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div
      className="contact-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/conn.jpeg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Contact Header */}
      <section className="contact-header fade-in">
        <h2 style={{ color: "white" }}>Contact Me</h2>
        <p style={{ color: "white" }}>Let’s connect and secure something amazing together!</p>
      </section>

      {/* Contact Info */}
      <section className="contact-info fade-in">
        <div className="info-block">
          <i className="fa-regular fa-envelope"></i>
          <div>
            <h4>Email</h4>
            <p>yuvakiranreddy7@gmail.com</p>
          </div>
        </div>

        <div className="info-block">
          <i className="fa-solid fa-phone-volume"></i>
          <div>
            <h4>Phone</h4>
            <p>+91 88973 37784</p>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-media fade-in">
        <h3 style={{ color: "white" }}>Connect on Social Media</h3>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/yuvakiran-reddy-neeluru-108a0328a"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>

          <a
            href="https://github.com/Yuvaes7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
