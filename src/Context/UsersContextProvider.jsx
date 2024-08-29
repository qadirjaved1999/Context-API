<<<<<<< HEAD
import React from 'react';
import UsersContext from './UsersContext';

const UsersContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    return (
        <UsersContext value={{user, setUser}}>
            {children}
        </UsersContext>
    );
}

export default UsersContextProvider
=======
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    console.log("children===>>>>",children);
    const [user, setUser] = React.useState(null);
    const [id, setId] = useState(null);
    return (
        <UserContext.Provider value={{
            user,
            setUser,
            id,
            setId
            }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider
>>>>>>> a4856df6b15f1c455a6d674fa25a098df6da5a6f
