import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import SignupForm from "../LogInSignUp/SignUpForm";
import SearchBar from '../SearchBar/SearchBar'
import "./dashboard.css";
import logwithwords from '../../img/logowithwords.png'

import { getHike } from '../../utils/API';
//dashboard
// dashboard,
//     title,
//     showTitle = true,
//     showUsername = true,

//dashboard
const Dashboard = () => {
    const [renderForm, setRenderForm] = useState("dashboard");
    const renderFormHandler = (page) => {
        setRenderForm(page);
    };

    async function getHikeAPI() {
        try {
            let results = await getHike();
            console.log(results);

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getHikeAPI()
    })

    const renderPage = () => {
        if (renderForm === "home") {
            return (
                < homePage renderForm={renderForm} setRenderForm={setRenderForm} />
            );
        } else if (renderForm === "profile") {
            return (
                < profilePage renderForm={renderForm} setRenderForm={setRenderForm} />
            );
        } else if (renderForm === "dashboard") {

            console.log("test")

            return (
                <>
                    <SearchBar />
                    <div id="main-home-container">
                        <div id="home-container">
                            <div>
                                <div id="home-logo">
                                    <img src={logwithwords} alt="logo"></img>
                                </div>
                            </div>

                            <p>Sike to Hike!</p>
                        </div>

                        <div id="home=buttons">
                            < Link to="/home">Home</Link>
                            <button
                                id="home-button"
                                onClick={() => renderFormHandler("home")}
                            >
                                Home
                            </button>
                            <button
                                id="profile-button"
                                onClick={() => renderFormHandler("profile")}
                            >
                                Profile
                            </button>
                        </div>
                    </div>
                </>
            );
        }

    };
    return renderPage();
};
export default Dashboard;