import React, { useEffect, useState ,createContext} from 'react';
import  {onAuthStateChanged,getAuth} from 'firebase/auth';
import PropTypes from 'prop-types';
export const AuthContext=createContext()
export const AuthProvider=({children})=>{
    const [user ,setUser]=useState(null)
    const auth = getAuth();

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser)
          }})
      },[]);
return(
    <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
)}

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired
  };