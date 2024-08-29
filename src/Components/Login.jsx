<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import UsersContext from '../Context/UsersContext';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UsersContext);
    const handleSubmit = (e) => {
      e.preventDefault();
    }
    return (
        <>
            <h2>Login</h2>
            <input type="text" placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login
=======
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
>>>>>>> a4856df6b15f1c455a6d674fa25a098df6da5a6f
