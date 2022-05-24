import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {BsBell} from 'react-icons/bs'
import {BiUserPlus,BiImage,BiArchiveIn}from 'react-icons/bi'
import {FiMoreVertical}from 'react-icons/fi'
import './style.css'
function NotesInput({noteData ,setNoteData}) {
    const [visible,setVisible]=useState(false)
    return (
        <div>
        <div className='notes-input'>
            <input placeholder='Take a notes...' onClick={()=>setVisible(true)}/>
            <AiOutlineCheckSquare className='input-icon'/>
        </div>
        {visible? <div className='add-notes-modle'>
            <input placeholder='Title' 
            onChange={(e)=>setNoteData({...noteData,title:e.target.value})}/>
            <input placeholder='Take a notes...'
            onChange={(e)=>setNoteData({...noteData,content:e.target.value})}/>
            <div className='add-notes-footer'>
         <div className='add-notes-icons'>
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
         <span onClick={()=>setVisible(false)}>Close</span>
            </div>
        </div>:null}
    
        </div>
    );
}
NotesInput.propTypes = {
    noteData: PropTypes.objectOf.isRequired,
    setNoteData:PropTypes.func.isRequired
  };

export default NotesInput;