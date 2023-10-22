import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/username.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import google_icon from "../Assets/google.png";
import { useGoogleLogin } from "@react-oauth/google";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img className="iconsize" src={user_icon} alt="" />
            <input type="text" placeholder="Username" />
          </div>
        )}
        <div className="input">
          <img className="iconsize" src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img className="iconsize" src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
      </div>
      <div className="googlelogin">
        <img className="googlesize" src={google_icon} alt="" />
        <button onClick={() => login()}><span>Sign in with Google</span></button>
      </div>
    </div>
  );
};

export default LoginSignup;
