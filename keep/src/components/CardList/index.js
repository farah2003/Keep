import React,{useState} from 'react';
import {db} from '../../firebase-config'
import {updateDoc,doc} from 'firebase/firestore'
import PropTypes from 'prop-types';
import NoteCard from '../NoteCard/index';
import NotesInput  from '../NotesInput/index';
import EditNotes from '../EditNotes';
import './style.css'
function CardList({view,notes,setIsUpdate}) {
    const [editModle,setEditModle]=useState(false)
    const [updateNote,setUpdateNote]=useState({})

    const displayCardContent=(item)=>{
        setEditModle(true)
        setUpdateNote(item)
    }
    const handleEditNote=async()=>{
        try{
            const userDocs=doc(db,"Notes",updateNote.id)
            await updateDoc(userDocs,updateNote)
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
           :  <div className={`${view}`}>
               {notes.map((item)=>{
                return (
                <div key={item.id} onClick={()=>displayCardContent(item)}>
                 <NoteCard view={view} item={item}/>
                 </div>)
               })}
             

            </div>}
          
          
        </div>
    );
}
CardList.propTypes = {
 view:PropTypes.string.isRequired,
 notes:PropTypes.arrayOf.isRequired,
 setIsUpdate:PropTypes.func.isRequired
  };

export default CardList;