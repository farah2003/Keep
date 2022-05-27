import React ,{useContext,useState,useEffect}from 'react';
import {db} from '../../firebase-config'
import {collection, where, query,doc,getDocs} from 'firebase/firestore'
import {AuthContext} from '../../Auth';
import PropTypes from 'prop-types';
import NoteCard from '../NoteCard/index';
function InArchive({view}) {
    const [inArchiveNotes ,setInArchiveNotes]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(()=>{
        const fetchData= async()=>{
            const noteColloectionRef=doc(db,'Users',user.uid)
            const subCollectionRef=collection(noteColloectionRef,'Notes')
            const notesquery=query(subCollectionRef,where("inArchive","==",true))
            const data =await getDocs(notesquery);
            setInArchiveNotes(data.docs.map((doc)=>({...doc.data(),id:doc.id })))
        }
        fetchData()
    },[])
    return (
        <div className={`${view} trashCard`}>
        {inArchiveNotes.map((item)=>{
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

InArchive.propTypes = {
    view:PropTypes.string.isRequired,
     };
export default InArchive;