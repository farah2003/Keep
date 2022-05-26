import React, { useState ,useContext} from 'react';
import PropTypes from 'prop-types';
import {db} from '../../firebase-config'
import {addDoc, doc, collection} from 'firebase/firestore'
import { AuthContext} from '../../Auth';
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {BsBell} from 'react-icons/bs'
import {BiUserPlus,BiImage,BiArchiveIn}from 'react-icons/bi'
import {FiMoreVertical}from 'react-icons/fi'
import './style.css'

function NotesInput({setIsUpdate}) {
    const [visible,setVisible]=useState(false)
    const [note,setNote]=useState({title:"",content:"",isDeleted:false})
    const {user}=useContext(AuthContext)
    const noteColloectionRef=doc(db,'Users',user.uid)
    const subCollectionRef=collection(noteColloectionRef,'Notes')
    const handleAddNotes=async()=>{
        try{
            setVisible(false)
             await addDoc(subCollectionRef,note)
             setIsUpdate(true)
             setNote({title:"",content:"",isDeleted:false})
           }catch(e){
             console.log(e)
           }
    }
    return (
        <div className='input-container'>
        
        {visible? <div className='add-notes-modle'>
            <input placeholder='Title' 
            value={note.title}
            onChange={(e)=>setNote({...note,title:e.target.value})}/>
            <input placeholder='Take a notes...'
            value={note.content}
            onChange={(e)=>setNote({...note,content:e.target.value})}/>
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
         <span onClick={()=>handleAddNotes()}>Close</span>
            </div>
        </div>:
        <div className='notes-input'>
        <input placeholder='Take a notes...' value={""} onClick={()=>setVisible(true)}/>
        <AiOutlineCheckSquare className='input-icon'/>
    </div>}
    
        </div>
    );
}
NotesInput.propTypes = {
    setIsUpdate:PropTypes.func.isRequired
     };

export default NotesInput;