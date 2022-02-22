import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';


import { ADD_USER } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';

import Auth from '../../utils/auth';

const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPwd] = useState('');


    //// This is where im having issues.... referencing the right structure for user query and add user mutation
    const [addUser, { error }] = useMutation(ADD_USER, {
        update(cache, { data: { addUser } }) {
            try {
                const { user } = cache.readQuery({ query: QUERY_USER });

                cache.writeQuery({
                    query: QUERY_USER,
                    data: { user: [...user, addUser] },
                });
            } catch (e) {
                console.error(e);
            }
            // update user object's cache

        },
    });


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: {
                    email,
                    password
                },
            });

            setEmail('');
            setPwd('');

        } catch (err) {
            console.error(err);
        }
    };

    // const handleChange = (event) => {
    // const { username, value } = event.target;
    // const { email, value } = event.target;
    // const { password, value } = event.target;

    // if (name === 'username' && value.length <= 20) {
    //     setName('');
    //     setEmail('');
    //     set
    // }
    /*Render SignUp page here*/
    return (

        <div>
            <h3>Hike With Us!</h3>
            <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
            >
                <div className="col-12 col-lg-9">
                    <textarea
                        name="username"
                        placeholder="type in your new username"
                        value={username}
                        className="form-input w-100"
                        style={{ lineHeight: '1.5', resize: 'vertical' }}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="col-12 col-lg-9">
                    <textarea
                        name="email"
                        placeholder="type in your new email"
                        value={email}
                        className="form-input w-100"
                        style={{ lineHeight: '1.5', resize: 'vertical' }}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="col-12 col-lg-9">
                    <textarea
                        name="password"
                        placeholder="type in a secure password for your account"
                        value={password}
                        className="form-input w-100"
                        style={{ lineHeight: '1.5', resize: 'vertical' }}
                        onChange={handleChange}
                    ></textarea>
                </div>





            </form>
        </div>


    );
};


export default SignUpForm;
