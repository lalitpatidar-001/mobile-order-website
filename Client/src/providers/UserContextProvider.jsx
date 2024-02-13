import React, { useEffect, useMemo, useState } from 'react'
import { userContext } from '../context/userContext';

function UserContextProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Use a function to initialize user from localStorage
    const storedUser = localStorage.getItem('local-user');
    return storedUser ? JSON.parse(storedUser) : false;
  });
  
  useEffect(() => {
    // Update localStorage when user changes
    localStorage.setItem('local-user', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);
  
  
    const contextValue = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);


  return (
    <userContext.Provider value={contextValue}>
        {children}
    </userContext.Provider>

  )
}

export default UserContextProvider