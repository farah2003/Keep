import React, { useEffect, useState } from 'react';
import  {onAuthStateChanged,getAuth} from 'firebase/auth';
import PropTypes from 'prop-types';
export const AuthContext=React.createContext()
export const AuthProvider=({children})=>{
    const [user ,setUser]=useState()
    const auth = getAuth();

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser)
          }})
      },[]);
return(
    <AuthProvider.Provider value={user,setUser}>
        {children}
    </AuthProvider.Provider>
)}

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired
  };