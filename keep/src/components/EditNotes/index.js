import React from 'react';
import PropTypes from 'prop-types';
import {BsBell} from 'react-icons/bs'
import {BiUserPlus,BiImage,BiArchiveIn}from 'react-icons/bi'
import {FiMoreVertical}from 'react-icons/fi'
import './style.css'
function EditNotes({setEditModle}) {
    return (
        <div className='edit-modle'>
        <input  className="edit-modle-title" value={'fgjhkhfghfghkjfghkjgf'} />
        <input    className='edit-modle-content' value={'fgjhkhfghfghkjfghkjgf'}/>
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
     <span onClick={()=>setEditModle(false)}>Close</span>
        </div>
    </div>
    );
}

EditNotes.propTypes = {
    setEditModle:PropTypes.func.isRequired,
     };
   
export default EditNotes;