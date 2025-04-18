import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div
        className="home-hero fade-in"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/resume.jpeg"})`,
        }}
      >
        <div className="hero-content">
          <h1>Hi, I'm Neeluru Yuvakiran Reddy</h1>
          <p>Aspiring Cybersecurity Professional & CSE Undergraduate</p>
          <Link to="/about">
            <button className="hero-btn">View My Resume</button>
          </Link>
        </div>
      </div>

      {/* Profile Section */}
      <div className="home-section fade-in">
        <div
          className="profile-image"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/deepika.jpeg"})`,
          }}
        ></div>
        <div className="intro-text">
          <h2>Welcome to My Portfolio</h2>
          <p>
            I'm currently pursuing B.Tech in Computer Science and Engineering at
            Madanapalle Institute of Technology & Science. With a strong
            interest in ethical hacking, encryption-based applications, and
            threat analysis, I enjoy exploring how to secure digital systems
            through hands-on projects and real-world challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
