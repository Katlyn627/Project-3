import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import "./LogInSignUp.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const LogInForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });

  // re pushing to fix issues


  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  useEffect(() => {
    error ? setShowAlert(true) : setShowAlert(false);
  }, [error]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log("handleFormsubmit");

    try {
      const { data } = await login({ variables: { ...userFormData } });
      console.log(data);
      Auth.login(data.login.token);
      window.location.assign("/home");
    } catch (err) {
      console.log("I have an error");
      console.error(err);
    }

    setUserFormData({
      username: "",
      password: "",
    });
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
        <Link>Login</Link>
      </Form>
    </>
  );
};

export default LogInForm;
