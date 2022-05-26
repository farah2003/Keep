import React, { useEffect, useState,useContext } from 'react';
import PropTypes from 'prop-types';
import {db} from '../../firebase-config'
import {collection, getDocs, where, query,doc,updateDoc} from 'firebase/firestore'
import {AuthContext} from '../../Auth';
import NoteCard from '../NoteCard/index';
import NotesInput  from '../NotesInput/index';
import EditNotes from '../EditNotes';
import './style.css'

const CardList=({view}) =>{
    const [editModle,setEditModle]=useState(false);
    const [updateNote,setUpdateNote]=useState({});
    const [isUpdate,setIsUpdate]=useState(false);
    const [notes,setNotes]=useState([]);

    const {user}=useContext(AuthContext)

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const noteColloectionRef=doc(db,'Users',user.uid)
        const subCollectionRef=collection(noteColloectionRef,'Notes')
        const notesquery=query(subCollectionRef,where("isDeleted","==",false))
        const data =await getDocs(notesquery);
        setNotes(data.docs.map((doc)=>({...doc.data(),id:doc.id })))
      }catch(e){
        console.log(e)
      }
    }
    fetchData()

  },[isUpdate])
    const displayCardContent=(item)=>{
        setEditModle(true)
        setUpdateNote(item)
    }

    const handleEditNote=async()=>{
        try{
            const noteColloectionRef=doc(db,'Users',user.uid)
            const subCollectionRef=doc(noteColloectionRef,'Notes',updateNote.id)
            await updateDoc(subCollectionRef,updateNote)
            setIsUpdate(true)
            setEditModle(false)
          }catch(e){
            console.log(e)
          }
    }

    return (
        <div className='card-list'>
            <div className='input-section'>
                <NotesInput setIsUpdate={setIsUpdate}/>  
            </div>
            {editModle?
            <EditNotes 
            handleEditNote={handleEditNote} 
            updateNote={updateNote}
            setUpdateNote={setUpdateNote}/>
           :
           <div className={`${view}`}>
               {notes.map((item)=>{
                return (
                    <div key={item.id}>
                        <NoteCard view={view} 
                        item={item} 
                        setIsUpdate={setIsUpdate} 
                        displayCardContent={displayCardContent}/>
                    </div>)
               })}            
            </div>}
        </div>
    );
}
CardList.propTypes = {
 view:PropTypes.string.isRequired,
  };

export default CardList;