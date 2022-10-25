import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../../assets/login/login.png";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="wrapper">
      <div className="logo">
        <img src={LoginImg} alt="" />
      </div>
      <div className="text-center mt-4 name">Twitter</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <button className="btn mt-3">Login</button>
        <button className="btn mt-3">Google</button>
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
