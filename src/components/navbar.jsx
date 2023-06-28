import React from 'react'
import "../styles/navbar.css";

function navbar() {
  return (
    <div class="navbar">
      <a className="active" href="#">
        Download
      </a>
      <a href="#About">About</a>
      <a href="#Contact">Contact</a>
    </div>
  );
}

export default navbar