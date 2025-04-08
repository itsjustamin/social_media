import React from "react";
import "./nav.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="item">
        <a href="#q">Profile</a>
      </div>
      <div className="item">
        <a href="#q">Messages</a>
      </div>
      <div className="item">
        <a href="#q">News</a>
      </div>
      <div className="item">
        <a href="#q">Music</a>
      </div>
      <div className="item">
        <a href="#q"> Settings</a>
      </div>
    </nav>
  );
};
export default Navbar;
