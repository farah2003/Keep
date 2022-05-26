import React, { useEffect, useState } from 'react';
import {NavBar ,Sidebar ,CardList}from './components/index';
import  {GoogleAuthProvider ,signInWithPopup,getAuth} from 'firebase/auth';
import {db} from './firebase-config'
import {collection ,getDocs ,where,query} from 'firebase/firestore'

import './app.css'
const App=() =>{
  const [toggle,setToggle]=useState(false)
  const [view,setView]=useState('list');
  const [notes,setNotes]=useState([]);
  const [isUpdate,setIsUpdate]=useState(false)

  const notesColloectionRef=collection(db,"Notes")
  useEffect(()=>{
    const fetchData=async()=>{
      try{
    
        const notesquery=query(notesColloectionRef,where("isDeleted","==",false))
        const data =await getDocs(notesquery);
        setNotes(data.docs.map((doc)=>({...doc.data(),id:doc.id })))
      }catch(e){
        console.log(e)
      }
    }
    fetchData()

  },[isUpdate])
  const auth = getAuth();

  const signUp=async ()=>{
      try{
        let googleProvider= new GoogleAuthProvider()
        const {user} = await signInWithPopup(auth,googleProvider)
        console.log(user.uid)
        console.log(user.photoURL)
      }catch(e){
        console.log(e)
      }
  
  

  }
  return (    
    <div>
      <NavBar setToggle={setToggle} view={view} setView={setView}/>
      <button onClick={()=>signUp()}>sign</button>  
      <div className='page-content'>
        {toggle?
        <div className="non-expanded">
          <Sidebar  toggle={toggle}/>
        </div>
        :
        <div className='expanded'>
          <Sidebar toggle={toggle}/>
        </div>
        }
        <div className='cards-conatiner'>
          <CardList
          notes={notes}
           view={view}
           setIsUpdate={setIsUpdate}
         />
        </div>
      
      </div>
         
    </div>

  );
}

export default App;