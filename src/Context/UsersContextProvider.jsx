import React from 'react';
import usersContext from './UsersContext';

const UsersContextProvider = ({children}) => {
 return(
    <>
    {children}
    </>
 );
}

export default UsersContextProvider