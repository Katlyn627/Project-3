import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_THOUGHT } from "../../utils/mutations";
// import { QUERY_THOUGHTS, QUERY_ME } from "../../utils/queries";

// import Auth from "../../utils/auth";

const ThoughtForm = () => {
  const [thoughtFormData, setThoughtFormData] = useState({
    thoughtText: "",
    thoughtAuthor: "",
  });
  const [addThought, { error }] = useMutation(ADD_THOUGHT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setThoughtFormData({ ...thoughtFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addThought({
        variables: { ...thoughtFormData },
      });
    } catch (error) {
      console.log(error);
    }
    setThoughtFormData({
      thoughtText: "",
      thoughtAuthor: "",
    });
  };

  return (
    <>
      <div>
        <h3>NEW HIKE POST FORM FORM GOES HERE</h3>

        <form className="" onSubmit={handleFormSubmit}>
          <div className="newHike">
            <input
              type="text"
              placeholder="Enter a title for your post"
              name="title"
              onChange={handleInputChange}
              value={thoughtFormData.username}
            />
          </div>
          <div className="post">
            <input
              type="text"
              placeholder="Your thoughts on this hike"
              name="body"
              onChange={handleInputChange}
              value={thoughtFormData.password}
            />
          </div>
          <button className="submitButton" type="submit">
            Submit Post
          </button>
          {error && <div className="">Something went wrong...</div>}
        </form>
      </div>
      <p>
        If you're not signed up yet, create an account. Please{" "}
        <Link to="/signup">SignUp</Link>
      </p>
    </>
  );
};

export default ThoughtForm;
