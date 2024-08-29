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
