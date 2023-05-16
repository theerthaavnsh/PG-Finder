import React from "react";
import heroimg from "../../src/images/hero.png";
import logo from '../../src/images/logo.png'
import './hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <div className="nav">
        <div className="nav-left">
          <img src={logo} alt=""></img>
        </div>
        <div className="nav-right">
          <a href="/login">Login</a>
        </div>
      </div>
      <div className="hero-cont">
        <div className="hero-left">
          <h1>Discover your dream PG today!</h1>
          <p>Your one-stop destination for finding the perfect paying guest accommodations. 
            Whether you're a student, working professional, or new to a city, our user-friendly platform connects you
            with a wide range of verified PG options, making your search hassle-free and convenient. 
            <b>Find your ideal home away from home with PG Finder today!</b> 
          </p>
          <a href="/login" className="join-now-button">Join Now</a>
        </div>
        <div className="hero-right">
          <img src={heroimg} alt=""></img>
        </div>
      </div>
    </div>
  );
}
