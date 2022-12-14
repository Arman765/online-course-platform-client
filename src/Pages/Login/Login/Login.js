import React, { useContext, useState } from "react";
import "./Login.css";
import LoginImg from "../../../assets/login/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaMailBulk, FaKey } from "react-icons/fa";

const Login = () => {
  const { providerLogin, signIn, providerLoginGit } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
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

  const handleGithubSignIn = () => {
    providerLoginGit(githubProvider)
      .then((result) => {
        const user = result.user;

        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src={LoginImg} alt="" />
      </div>
      <div className="text-center mt-4 name">Login</div>
      <form onSubmit={handleSubmit} className="p-3 mt-3">
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
        <div className="text-danger">{error}</div>
        <button className="btn mt-3">Login</button>
      </form>
      <button onClick={handleGoogleSignIn} className="btn mt-2 mb-3">
        Google
      </button>
      <button onClick={handleGithubSignIn} className="btn mt-2 mb-3">
        Github
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
