import React, { useState } from 'react';
import {NavBar ,NotesInput,Sidebar }from './components/index';
const App=() =>{
const [toggle,setToggle]=useState(false)
const [noteData,setNoteData]=useState({title:"",content:""})

  return (    
    <div>
      <NavBar setToggle={setToggle}/>
      <NotesInput setNoteData={setNoteData} noteData={noteData}/>
      <Sidebar toggle={toggle}/>
    </div>

  );
}

export default App;