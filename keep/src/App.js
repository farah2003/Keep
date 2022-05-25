import React, { useState } from 'react';
import {NavBar ,Sidebar ,CardList}from './components/index';
import './app.css'
const App=() =>{
const [toggle,setToggle]=useState(false)
const [noteData,setNoteData]=useState({title:"",content:""})
const [view,setView]=useState('list')

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
          <CardList setNoteData={setNoteData} noteData={noteData} view={view} />
        </div>
      
      </div>
      
    </div>

  );
}

export default App;