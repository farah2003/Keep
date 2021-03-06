import React, { useEffect, useState } from 'react';
import {NavBar ,Sidebar /*,CardList*/}from './components/index';
import PropTypes from 'prop-types';
import  {GoogleAuthProvider ,signInWithPopup,getAuth,onAuthStateChanged} from 'firebase/auth';
import './app.css'
const Main=({view,setView}) =>{
  const [toggle,setToggle]=useState(false)
  const [user ,setUser]=useState()
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }})
  },[]);
 

  const signUp=async ()=>{
      try{
        let googleProvider= new GoogleAuthProvider()
        const {user} = await signInWithPopup(auth,googleProvider)
        setUser(user)
      }catch(e){
        console.log(e)
      }
  }
  return ( 
    <>
    {user?
    <div>  
      <NavBar setToggle={setToggle} view={view} setView={setView}/> 
        <Sidebar toggle={toggle}/>  
      </div>
    :
    <div><button onClick={()=>signUp()}>sign</button> </div>}
</>
  );
      }
Main.propTypes = {
  view:PropTypes.string.isRequired,
  setView:PropTypes.func.isRequired
}

export default Main;