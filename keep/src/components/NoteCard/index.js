import React from 'react';
import {BsBell} from 'react-icons/bs'
import {BiUserPlus,BiImage,BiArchiveIn}from 'react-icons/bi'
import {FiMoreVertical}from 'react-icons/fi'
import './style.css'
function NoteCard() {
    return (
        <div className='card list-card' >
            <div className='title'>
            is simply dummy text of the printing
            </div>
            <div className='content'>
            is simply dummy text of the printing
            </div>
            <div className='card-icons'>
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
        </div>
    );
}

export default NoteCard;