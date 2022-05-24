import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLightbulb ,faBell,faPenToSquare ,faFolderOpen, faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import './style.css'
function Sidebar() {
    return (
        <div className='sidebar'>
                <ul>
                    <li>
                        <a href='#'>
                        <FontAwesomeIcon icon={faLightbulb}/>
                        <span className='links_name'>Notes</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faBell}/>
                            <span className='links_name'>Reminders</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faPenToSquare}/>
                            <span className='links_name'>Edit lable</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faFolderOpen}/>
                            <span className='links_name'>Archive</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                            <span className='links_name'>Trash</span>
                        </a>
                    </li>
                </ul>
            
        </div>
    );
}

export default Sidebar;