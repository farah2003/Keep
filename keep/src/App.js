import React, { useEffect, useState } from 'react';
import {NavBar ,Sidebar ,CardList}from './components/index';
import {db} from './firebase-config'
import {collection ,getDocs} from 'firebase/firestore'

import './app.css'
const App=() =>{
  const [toggle,setToggle]=useState(false)
  const [noteData,setNoteData]=useState({title:"",content:""})
  const [view,setView]=useState('list');
  const [notes,setNotes]=useState([])

  const userColloectionRef=collection(db,"Notes")
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const data =await getDocs(userColloectionRef);
        setNotes(data.docs.map((doc)=>({...doc.data(),id:doc.id })))
      }catch(e){
        console.log(e)
      }
    }
    fetchData()

  },[])
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
          <CardList setNoteData={setNoteData} 
          noteData={noteData}
          notes={notes}
           view={view}
         />
        </div>
      
      </div>      
    </div>

  );
}

export default App;