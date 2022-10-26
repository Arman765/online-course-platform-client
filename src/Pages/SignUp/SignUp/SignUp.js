import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../../assets/login/login.png";
import "./SignUp.css";
import { FaUser, FaKey, FaMailBulk, FaPhotoVideo } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src={LoginImg} alt="" />
      </div>
      <div className="text-center mt-4 name">Register</div>
      <form onSubmit={handleSubmit} className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <FaUser></FaUser>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <FaPhotoVideo></FaPhotoVideo>
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="photoURL"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <FaMailBulk></FaMailBulk>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <FaKey></FaKey>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            required
          />
        </div>
        <button className="btn mt-3">Submit</button>
      </form>

      <div className="text-center fs-6">
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
