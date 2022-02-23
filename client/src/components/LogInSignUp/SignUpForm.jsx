import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ADD_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

const SignUpForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await addUser(userFormData);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { token, user } = await response.json();
      // console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div>
        <form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <div>
            <label>
              <input
                name="username"
                type="text"
                placeholder="Enter a username"
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
            </label>
          </div>
          <div>
            <label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
            </label>
          </div>
          <div>
            <label>
              <input
                name="password"
                type="text"
                placeholder="Enter safe password"
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
            </label>
          </div>
          <button type="submit"> Submit</button>
        </form>
      </div>
      <p>
        Are you already part of our community?. Please{" "}
        <Link to="/login">LogIn</Link>
      </p>
    </>
  );
};

export default SignUpForm;
