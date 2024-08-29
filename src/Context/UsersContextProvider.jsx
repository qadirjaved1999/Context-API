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