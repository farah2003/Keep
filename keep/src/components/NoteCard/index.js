import React from 'react';
import {BsBell} from 'react-icons/bs'
import PropTypes from 'prop-types';
import {BiUserPlus,BiImage,BiArchiveIn}from 'react-icons/bi'
import {FiMoreVertical}from 'react-icons/fi'
import './style.css'
function NoteCard({view,item}) {
    return (
        <div className={`card ${view}-card` }>
            <div className='title'>
           {item.title}
            </div>
            <div className='content'>
            {item.content}
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
NoteCard.propTypes = {
    view:PropTypes.string.isRequired,
    item:PropTypes.objectOf.isRequired
     };

export default NoteCard;