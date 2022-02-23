import React, { useState, useEffect } from "react";
import LogInForm from "../LogInSignUp/LogInForm";
import SignUpForm from "../LogInSignUp/SignUpForm";
import { Link } from "react-router-dom";
// import './home.css'
const HomePage = () => {
  const [renderForm, setRenderForm] = useState("home");

  const renderFormHandler = (page) => {
    setRenderForm(page);
  };

  const renderPage = () => {
    if (renderForm === "signup") {
      return (
        <SignUpForm renderForm={renderForm} setRenderForm={setRenderForm} />
      );
    } else if (renderForm === "login") {
      return (
        <LogInForm renderForm={renderForm} setRenderForm={setRenderForm} />
      );
    } else if (renderForm === "dashboard") {
      return (
        <h1>DASHBOARD HEREEEEE</h1>
        // <Dashboard renderForm={renderForm} setRenderForm={setRenderForm} />
      );
    } else if (renderForm === "home") {
      return (
        <>
          <div id="main-home-container">
            <div id="home-container">
              <div>
                <div id="home-logo">
                  <img src="../img/logowithwords.png" alt="logo"></img>
                </div>
              </div>

              <p>Sike to Hike!</p>
            </div>
            <div id="home-login-buttons">
              <Link to="/login">LogIn</Link>
              <button
                id="login-button"
                onClick={() => renderFormHandler("login")}
              >
                Sign In Instead
              </button>
              <button
                id="signup-button"
                onClick={() => renderFormHandler("signup")}
              >
                Get Hiking
              </button>
              <p>
                You need to be logged in to participate. Please{" "}
                <Link to="/login">login</Link> or{" "}
                <Link to="/signup">signup.</Link>
              </p>
            </div>
          </div>
        </>
      );
    }
  };
  return renderPage();
};
export default HomePage;
