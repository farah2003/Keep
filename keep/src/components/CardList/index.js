import React,{useState} from 'react';
import PropTypes from 'prop-types';
import NoteCard from '../NoteCard/index';
import NotesInput  from '../NotesInput/index';
import EditNotes from '../EditNotes';
import './style.css'
function CardList({view}) {
    const [editModle,setEditModle]=useState(false)
    return (
        <div className='card-list'>
            <div className='input-section'>
            <NotesInput/>  
            </div>
            {editModle?
            <EditNotes setEditModle={setEditModle}/>
           :  <div className={`${view}`}>
                <div onClick={()=>setEditModle(true)}>
            <NoteCard view={view}/>
            </div>
            <NoteCard  view={view}/>
            <NoteCard  view={view}/>
            <NoteCard  view={view}/>
            <NoteCard  view={view}/>
            <NoteCard  view={view}/>
            <NoteCard  view={view}/>
            </div>}
          
          
        </div>
    );
}
CardList.propTypes = {
 view:PropTypes.string.isRequired,
  };

export default CardList;