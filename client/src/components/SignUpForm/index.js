import React, { useState } from 'react';
import { Link } from '@apollo/client';
import { useMutation } from '@apollo/client';


import { ADD_USER } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';

const ProfileForm = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');


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
            const { user } = cache.readQuery({ query: QUERY_USER });
            cache.writeQuery({
                query: QUERY_USER,
                data: { user: { ...user, addUser } },
            });
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: {
                    username,
                    email
                },
            });
            setName('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { username, value } = event.target;

        if (name === 'username' && value.length <= 20) {
            setName('');
            setEmail('');
        }
    };

    return (

        <div class="card-body text-center">
            <div class="login-card form-container">
                <h2 class="page-title welcome-font">Come Hike With Us!</h2>

                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                    </div>
                </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
                        </div>
        Already have an account? <a href="/">Log In</a>

                    </div>
  );
};

export default ProfileForm;
