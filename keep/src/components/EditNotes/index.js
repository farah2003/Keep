import React from 'react';
import PropTypes from 'prop-types';
import {BsBell} from 'react-icons/bs'
import {BiUserPlus,BiImage,BiArchiveIn}from 'react-icons/bi'
import {FiMoreVertical}from 'react-icons/fi'
import './style.css'
function EditNotes({handleEditNote,updateNote,setUpdateNote}) {

    return (
        <div className='edit-modle'>
        <input 
         className="edit-modle-title"
         value={updateNote.title} 
         onChange={(e)=>setUpdateNote({...updateNote,title:e.target.value})} />
        <input 
        className='edit-modle-content'
         value={updateNote.content}
         onChange={(e)=>setUpdateNote({...updateNote,content:e.target.value})}/>
        <p>Edited 2:19 AM</p>
        <div className='edit-notes-footer'>
     <div className='edit-notes-icons'>
     <div>
     <BsBell/>
    </div>         
    <div>
    <BiUserPlus/>
    </div>
     <div>
     <BiImage/>
     </div>       
     <div>
     <BiArchiveIn/>
     </div>
     <div>
         <FiMoreVertical/>
     </div>
     </div>
     <span onClick={()=>handleEditNote()}>Close</span>
        </div>
    </div>
    );
}

EditNotes.propTypes = {
    handleEditNote:PropTypes.func.isRequired,
    updateNote:PropTypes.objectOf.isRequired,
    setUpdateNote:PropTypes.func.isRequired
     };
   
export default EditNotes;