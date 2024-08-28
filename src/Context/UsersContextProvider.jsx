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