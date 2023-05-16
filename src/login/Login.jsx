import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-cont">
        <div className="login-head">
            <h1>Welcome to your new home!</h1>
            <P>Find your home away from home, just a click away</P>
            <button className="login-btn">
                <img alt="" src="google.png"></img>
            </button>
        </div>
        <div className="login-button"></div>
      </div>
    </div>
  );
}