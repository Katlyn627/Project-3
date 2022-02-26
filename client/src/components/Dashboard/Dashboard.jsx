import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import SignupForm from "../LogInSignUp/SignUpForm";
import SearchBar from '../SearchBar/SearchBar'
import "./dashboard.css";
import logowithwords from '../../img/logowithwords.png'
// import dashboarbackground from '../../img/dashboarbackground'
import  {getHike}  from '../../utils/API';
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
                                    <img src={logowithwords} alt="logo"></img>
                                </div>
                                {/* <div id="background">
                                    <img src={dashboarbackground} alt="background"></img>
                                </div> */}
                            </div>
                            <div id="text">
                                <p>"You're off to great places, today is your day. Your mountain is waiting, so get on your way." - Unknown</p>
                            </div>
                        </div>

                        <div id="home=buttons">

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

// fixeing App.js
