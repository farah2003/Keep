import React, { useEffect,useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {db} from '../../firebase-config'
import {collection, where, query,doc,getDocs} from 'firebase/firestore'
import {AuthContext} from '../../Auth';
import { NoteCard } from '..';
import './style.css'
function TrashedCards({view}) {
    const [trashedNotes ,setTrashedNotes]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(()=>{
        const fetchData= async()=>{
            const noteColloectionRef=doc(db,'Users',user.uid)
            const subCollectionRef=collection(noteColloectionRef,'Notes')
            const notesquery=query(subCollectionRef,where("isDeleted","==",false))
            const data =await getDocs(notesquery);
            setTrashedNotes(data.docs.map((doc)=>({...doc.data(),id:doc.id })))
        }
        fetchData()
    },[])
    return (
        <div className={`${view} trashCard`}>
            {trashedNotes.map((item)=>{
                return (
                    <div key={item.id}>
                        <NoteCard 
                        view={view}
                         item={item} />
                    </div>
                )
            })}
            
        </div>
    );
}

TrashedCards.propTypes = {
    view:PropTypes.string.isRequired,
     };
export default TrashedCards;