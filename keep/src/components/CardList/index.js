import React,{useState} from 'react';
import PropTypes from 'prop-types';
import NoteCard from '../NoteCard/index';
import NotesInput  from '../NotesInput/index';
import EditNotes from '../EditNotes';
import './style.css'
function CardList({view,notes}) {
    const [editModle,setEditModle]=useState(false)
    return (
        <div className='card-list'>
            <div className='input-section'>
            <NotesInput/>  
            </div>
            {editModle?
            <EditNotes setEditModle={setEditModle}/>
           :  <div className={`${view}`}>
               {notes.map((item)=>{
                return (<div key={item.id} onClick={()=>setEditModle(true)}>
                 <NoteCard view={view} item={item}/>
                 </div>)
               })}
             

            </div>}
          
          
        </div>
    );
}
CardList.propTypes = {
 view:PropTypes.string.isRequired,
 notes:PropTypes.arrayOf.isRequired
  };

export default CardList;