import React, { useState } from 'react';
import {NavBar ,Sidebar }from './components';
const App=() =>{
const [toggle,setToggle]=useState(false)

  return (    
    <div>
      <Sidebar toggle={toggle} />
      <NavBar setToggle={setToggle}/>
    </div>

  );
}

export default App;