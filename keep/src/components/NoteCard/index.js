import React ,{useContext}from 'react';
import PropTypes from 'prop-types';
import {BsBell} from 'react-icons/bs'
import {db} from '../../firebase-config'
import {updateDoc,doc} from 'firebase/firestore'
import {BiUserPlus,BiImage,BiArchiveIn}from 'react-icons/bi'
import {FiMoreVertical,FiTrash2}from 'react-icons/fi'
import { AuthContext } from '../../Auth';
import './style.css'

const NoteCard =({view, item, setIsUpdate, displayCardContent}) =>{

    const {user}=useContext(AuthContext)

    const handleMoveToTrash= async (item)=>{
        try{
            
            const noteColloectionRef=doc(db,'Users',user.uid)
            const subCollectionRef=doc(noteColloectionRef,'Notes',item.id)
            await updateDoc(subCollectionRef,{...item ,isDeleted :true})
            setIsUpdate(true)
          }catch(e){
            console.log(e)
          } 
    }
    const handleMoveToArchive= async (item)=>{
        try{
            
            const noteColloectionRef=doc(db,'Users',user.uid)
            const subCollectionRef=doc(noteColloectionRef,'Notes',item.id)
            await updateDoc(subCollectionRef,{...item ,inArchive :true})
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
         <BiArchiveIn onClick={()=>handleMoveToArchive(item)}/>
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