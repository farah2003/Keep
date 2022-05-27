import React, { useState} from 'react';
import { Route,  Routes,BrowserRouter } from 'react-router-dom';
import {AuthProvider} from './Auth'
import { CardList, TrashedCards, InArchive} from './components';
import Main from './Main';

const App=()=> {
  const [view,setView]=useState('list');
  

    return (
        <div>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main setView={setView} view={view}/>} >
      <Route index 
       element={<CardList
       view={view} />}/>
      <Route path="/reminder" element={<div>reminder</div>} />
      <Route path='/archive' element={<InArchive view={view}/>} />
      <Route path='/edit'element={<div>EDIT</div>} />
      <Route path='/trash' element={<TrashedCards view={view}/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </div>
    );
}

export default App;