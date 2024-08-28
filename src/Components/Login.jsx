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