import React, { useContext } from "react";
import "./Login.css";
import LoginImg from "../../../assets/login/login.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src={LoginImg} alt="" />
      </div>
      <div className="text-center mt-4 name">Login</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input type="email" name="email" id="email" placeholder="Email" />
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
      </form>
      <button onClick={handleGoogleSignIn} className="btn mt-2 mb-3">
        Google
      </button>
      <div className="text-center fs-6">
        <p>
          New to FreeDom Edu? <Link to="/signup">Create a New Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
