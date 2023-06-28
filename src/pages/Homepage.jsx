import React from "react";
import "../styles/homepage.css";

function Homepage() {
  return (
    <div className="home-container">
      <div className="about">Talking about the application.</div>
      <div className="futures">Talking about what will come.</div>
      <div className="download">Link to donwload the app from PlayStore.</div>
    </div>
  );
}

export default Homepage;
