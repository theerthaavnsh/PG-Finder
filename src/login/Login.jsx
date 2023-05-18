import React from "react";
import "./login.css";
import imgleft from '../../src/images/imgleft.png';
import imgright from '../../src/images/imgright.png';


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";



export default function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  async function handleSignIn() {

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });



  }
}


export default function Login() {
  return (
    

    <div className="login">
        <div className="login-image-left"></div>
        <div className="login-cont">
          <div className="login-head">
            <h1>Welcome To PGfind</h1>
            <p>
              Find your perfect PG in seconds with PGFind <br />
              The ultimate time-saving app for locating nearby PG!
            </p>
          </div>
          <div className="login-button">
            <button className="login-btn"
            
          
          onClick={handleSignIn}>
    
              <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
              />
              <p>Sign in with Google</p>
            </button>
          </div>
        </div>
        <div className="login-image-right"></div>
    </div>
  );
}
