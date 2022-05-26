import React, { useEffect, useState } from 'react';
import {AuthContext} from './Auth'
import { Route,  Routes,BrowserRouter } from 'react-router-dom';
import Main from './Main';
import {db} from './firebase-config'
import {collection ,getDocs ,where,query} from 'firebase/firestore'

import { CardList } from './components';
function App() {
  const [notes,setNotes]=useState([]);
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

  },/*[isUpdate]*/)
    return (
        <div>
    <AuthContext.Provider>
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} >
      <Route index element={<CardList notes={notes}/>}></Route>
      <Route path="/reminder" element={<div>reminder</div>} />
      <Route path='/archive' element={<div>archive</div>}/>
      <Route path='/edit' element={<div>edit</div>}/>
      <Route path='/trash' element={<div>trash</div>}/>
      </Route>
  
    </Routes>
    </BrowserRouter>
    </AuthContext.Provider>

        </div>
    );
}

export default App;