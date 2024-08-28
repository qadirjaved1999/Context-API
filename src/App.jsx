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
