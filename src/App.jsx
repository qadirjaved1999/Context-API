<<<<<<< HEAD
import { useState } from 'react';
import './App.css';
import UsersContextProvider from './Context/UsersContextProvider';

function App() {
  const [count, setCount] = useState(0)

  return (
   <UsersContextProvider>
    <h1>Qadir Javed</h1>
   </UsersContextProvider>
  )
}

export default App
=======
import React from 'react';
import './App.css';
import UserContextProvider from './Context/UsersContextProvider';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
    <UserContextProvider>
    <Login />
    <Profile />
   </UserContextProvider>
  )
}

export default App;
>>>>>>> a4856df6b15f1c455a6d674fa25a098df6da5a6f
