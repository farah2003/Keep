import React from 'react';
import PropTypes from 'prop-types';
import NoteCard from '../NoteCard/index';
import NotesInput  from '../NotesInput/index';
import './style.css'
function CardList({view}) {
    return (
        <div className='card-list'>
            <div className='input-section'>
            <NotesInput/>  
            </div>
            <div className={`${view}`}>
            <NoteCard view={view}/>
            <NoteCard  view={view}/>
            <NoteCard  view={view}/>
            <NoteCard  view={view}/>
            <NoteCard  view={view}/>
            <NoteCard  view={view}/>
            <NoteCard  view={view}/>
            </div>
          
        </div>
    );
}
CardList.propTypes = {
 view:PropTypes.string.isRequired,
  };

export default CardList;