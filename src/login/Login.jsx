import React from "react";
import "./login.css";
import imgleft from '../../src/images/imgleft.png';
import imgright from '../../src/images/imgright.png';

export default function Login() {
  return (
    <div className="login">
      <div className="login-image-left"></div>
      <div className="login-image-right"></div>
      <div className="login-cont">
        <div className="login-head">
          <h1>Welcome To PGfind</h1>
          <p>
            Find your perfect PG in seconds with PGFind <br />
            The ultimate time-saving app for locating nearby PG!
          </p>
        </div>
        <div className="login-button">
          <button className="login-btn">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
            />
            <p>Sign in with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}
