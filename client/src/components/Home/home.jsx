import React, { useState, useEffect, Component } from "react";
import LogInForm from "../LogInSignUp/LogInForm";
import SignUpForm from "../LogInSignUp/SignUpForm";
import { Link } from "react-router-dom";
import "./home.css";
import logowithwords from '../../img/logowithwords.png'

// Joana's code starts here

// class Home extends Component {
//   render() {
//     return{

//     }
//   }
// }

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
                  <img src={logowithwords} alt="logo"></img>
                </div>
              </div>
              <div id="home-text">
                <p>Welcome, lets get Hiking!</p>
              </div>
            </div>
            <div id="home-login-buttons">
              <button
                id="login-button"
                onClick={() => renderFormHandler("login")}
              >
                Get Hiking
              </button>
              <button
                id="signup-button"
                onClick={() => renderFormHandler("signup")}
              >
                Sign In Instead
              </button>
              <div id="log-statement">
                <p>
                  You need to be logged in to participate. Please{" "}
                  <Link to="/login">login</Link> or{" "}
                  <Link to="/signup">signup.</Link>
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return renderPage();
};
export default HomePage;
