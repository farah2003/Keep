import React from 'react';
import PropTypes from 'prop-types';
import {BsBell} from 'react-icons/bs'
import {db} from '../../firebase-config'
import {updateDoc,doc} from 'firebase/firestore'
import {BiUserPlus,BiImage,BiArchiveIn}from 'react-icons/bi'
import {FiMoreVertical,FiTrash2}from 'react-icons/fi'
import './style.css'

const NoteCard =({view, item, setIsUpdate, displayCardContent}) =>{

    const handleMoveToTrash= async (item)=>{
        try{
            const userDocs=doc(db,"Notes",item.id)
            await updateDoc(userDocs,{...item ,isDeleted :true})
            setIsUpdate(true)
          }catch(e){
            console.log(e)
          } 
    }

    return (
        <div className={`card ${view}-card` }>
            <div onClick={()=>displayCardContent(item)}>
                <div className='title'>
                    {item.title}
                </div>
                <div className='content'>
                {item.content}
                </div>
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
         <FiTrash2 onClick={()=>handleMoveToTrash(item)}/>
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
    item:PropTypes.objectOf.isRequired,
    setIsUpdate:PropTypes.func.isRequired,
    displayCardContent:PropTypes.func.isRequired
     };

export default NoteCard;