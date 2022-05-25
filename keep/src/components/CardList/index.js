import React from 'react';
import NoteCard from '../NoteCard/index';
import NotesInput  from '../NotesInput/index';
import './style.css'
function CardList() {
    return (
        <div className='card-list'>
            <div className='input-section'>
            <NotesInput/>  
            </div>
            <div className='list'>
            <NoteCard/>
            <NoteCard/>
            <NoteCard/>
            <NoteCard/>
            <NoteCard/>
            <NoteCard/>
            <NoteCard/>
            </div>
          
        </div>
    );
}

export default CardList;