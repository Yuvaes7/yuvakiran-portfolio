import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="about" style={{ backgroundColor: "#f0f4f8", padding: "50px 0" }}>
      {/* Education Section */}
      <section className="section fade-in" style={{ backgroundColor: "#f0f8ff", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>Education</h2>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
          <h4 style={{ color: "#3498db" }}>B.Tech (2022–2026)</h4>
          <p>Madanapalle Institute of Technology & Science – CSE – CGPA: 8.01</p>
        </div>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
          <h4 style={{ color: "#2ecc71" }}>Intermediate (2020–2022)</h4>
          <p>AP Model College – MPC</p>
        </div>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
          <h4 style={{ color: "#e67e22" }}>SSC (2019–2020)</h4>
          <p>Z.P.H.S, Khaderpeta – 90%</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section fade-in" style={{ backgroundColor: "#ecf0f1", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>Skills</h2>
        <div className="skills-grid">
          <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
            <h4 style={{ color: "#9b59b6" }}>Programming Languages</h4>
            <p>Java</p>
            <p>Object-Oriented Programming, Data Structures, Problem-solving</p>
          </div>
          <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
            <h4 style={{ color: "#f39c12" }}>Cybersecurity Skills</h4>
            <p>Ethical Hacking, Vulnerability Assessment, Risk Management, Threat Hunting, Cryptography, Malware Analysis</p>
          </div>
          <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
            <h4 style={{ color: "#e74c3c" }}>Tools</h4>
            <p>Wireshark, Nmap, Burp Suite, Metasploit, Dirb, Azure Sentinel</p>
          </div>
          <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
            <h4 style={{ color: "#3498db" }}>Database</h4>
            <p>SQL</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section fade-in" style={{ backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "8px", marginBottom: "20px" }}>
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>Projects</h2>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
          <h4 style={{ color: "#2980b9" }}>EcanConnect</h4>
          <p><i>Secure Messaging App with Face Authentication</i></p>
          <ul>
            <li>Integrated OpenCV-based face recognition for secure access.</li>
            <li>Automatically hides messages when unauthorized faces are detected.</li>
          </ul>
        </div>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
          <h4 style={{ color: "#27ae60" }}>Image Encryption Tool</h4>
          <p><i>CLI-based AES Encryption Utility</i></p>
          <ul>
            <li>Encrypts and decrypts image files using AES algorithm.</li>
            <li>Supports multiple image formats with enhanced security.</li>
          </ul>
        </div>
        <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
          <h4 style={{ color: "#8e44ad" }}>Text Encryption App</h4>
          <p><i>Web-based AES-256-CBC Encryption</i></p>
          <ul>
            <li>Secure text encryption and decryption using Node.js and Express.</li>
            <li>Frontend built with HTML/CSS, styled for user-friendly interaction.</li>
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section fade-in" style={{ backgroundColor: "#d5dbdb", padding: "30px", borderRadius: "8px", marginBottom: "20px" }}>
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>Certifications</h2>
        <ul>
          <li>Ethical Hacking – Nikistian Media Pvt Ltd</li>
          <li>Computer Networks & Network Security – NPTEL</li>
          <li>SQL Certification</li>
          <li>Speaking Effectively, German, Research Methodology – NPTEL</li>
        </ul>
      </section>

      {/* Honors & Awards Section */}
      <section className="section fade-in" style={{ backgroundColor: "#f7f9f9", padding: "30px", borderRadius: "8px", marginBottom: "20px" }}>
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>Honors & Interests</h2>
        <ul>
          <li>Actively participates in CTFs and cybersecurity challenges.</li>
          <li>Creates YouTube content focused on spirituality and personal growth.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
