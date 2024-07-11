// import { Link } from "react-router-dom"

import "./login.css";
import { useState } from "react";

export default function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let a = new Audio("assets/onclicksound.mpeg");
  const checkLogin = () => {
    if (email === "aksh@gmail.com" && pass === "hell") {
      setLogin(true);
      a.play();
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginRight">
          <h2 className="loginTitle">FriendsHub</h2>
          <span>
            FriendsHub helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="loginLeft">
          <input
            type="text"
            placeholder="Email"
            className="loginUserInfo"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="loginUserInfo"
            onChange={(e) => setPass(e.target.value)}
          />
          <button className="loginButton" onClick={checkLogin}>
            Log in
          </button>
          <span className="forgot">Forget Your Password?</span>
          <button className="create">Create New Account</button>
        </div>
      </div>
    </div>
  );
}
