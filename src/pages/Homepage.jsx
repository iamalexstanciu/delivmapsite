import React from "react";
import "../styles/homepage.css";
import Logo from "../assets/logo (2).png";
import Soon from "../assets/soon.png";
import Contact from "./Contact";

function Homepage() {
  return (
    <>
      <div className="home-container">
        <div className="about">
          <h2>DelivMap is the application for couriers.</h2>
          <p>
            The main point of the application is to help couriers who have to
            organize their delivery day in a fast, simple way and avoid wasting
            time along the way.
          </p>
        </div>
        <div className="futures">
          <h2>Next</h2>
          <p>
            v1.0 - brings an MVP that you can test and actually understand the
            idea and implementation, also looking for opinions and ideas for
            future version.
          </p>
        </div>
        <div className="download">
          <img src={Logo} alt="application logo" />
          <img src={Soon} alt="soon download link" />
        </div>
      </div>
      <Contact/>
    </>
  );
}

export default Homepage;
