import React, { useEffect, useState } from 'react';
import {NavBar ,Sidebar ,CardList}from './components/index';
import {db} from './firebase-config'
import {collection ,getDocs } from 'firebase/firestore'

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
        const data =await getDocs(notesColloectionRef);
        setNotes(data.docs.map((doc)=>({...doc.data(),id:doc.id })))
      }catch(e){
        console.log(e)
      }
    }
    fetchData()

  },[isUpdate])
  return (    
    <div>
      <NavBar setToggle={setToggle} view={view} setView={setView}/>
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