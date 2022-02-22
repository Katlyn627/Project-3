
import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutation';
import './LogInSignUp.css'
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';


const LogInForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  
  const [login, { error, data }] = useMutation(LOGIN_USER);


  useEffect(() => {
    error ? setShowAlert(true) : setShowAlert(false);
  }, [error]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...userFormData } });
      Auth.login(data.login.token);
      window.location.assign('/home');
    } catch (err) {
        console.error(err);
      }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <div>
      <h3>LOG IN FORM GOES HERE</h3>

    <form
    className="" onSubmit={handleFormSubmit}>
      <div className="username">
        <input
          type="text"
          placeholder="Enter your username"
          name="username"
          onChange={handleInputChange}
          value={userFormData.username}
          />
      </div>
          <div className="password">
              <input
              type="text"
              placeholder="password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              />
          </div>
        <button className="submitButton" type="submit">
          Start Hiking
        </button>
      {error && (
          <div className="">
          Something went wrong...
        </div>
      )}
    </form>
      </div>
      <p>
          If you're not signed up yet, create an account. Please{' '}
          <Link to="/signup">SignUp</Link>
        </p>

</>
)
      }

export default LogInForm;