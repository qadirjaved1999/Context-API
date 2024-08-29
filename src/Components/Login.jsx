import React, { useState, useContext, useId } from "react";
import UserContext from "../Context/UserContext";
import "../App.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setId } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
    setId(id)
  };
  const id = useId();
  console.log("-----login id=>",id)
  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />

        <button className="btn" onClick={handleSubmit}>Login</button>
      </form>
    </>
  );
};

export default Login;
