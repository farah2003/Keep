import React from 'react';
import PropTypes from 'prop-types';
import {GoLightBulb} from 'react-icons/go'
import{BsBell} from 'react-icons/bs'
import {BiPencil,BiArchiveIn} from 'react-icons/bi'
import {FiTrash2} from'react-icons/fi'
import './style.css'
function Sidebar({toggle}) {
    return (
            !toggle? <div className='sidebar'>
                <ul>
                    <li>
                        <a href='#'>          
                       <GoLightBulb  className='sider-icon'/>
                        <span className='links_name'>Notes</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <BsBell className='sider-icon'/>
                            <span className='links_name'>Reminders</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <BiPencil className='sider-icon'/>
                            <span className='links_name'>Edit lable</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <BiArchiveIn className='sider-icon'/>
                            <span className='links_name'>Archive</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FiTrash2 className='sider-icon'/>
                            <span className='links_name'>Trash</span>
                        </a>
                    </li>
                </ul>
            
        </div>:        <div className='sidebar2'>
                <ul>
                    <li>
                        <a href='#'>          
                       <GoLightBulb  className='sider-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <BsBell className='sider-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <BiPencil className='sider-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <BiArchiveIn className='sider-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FiTrash2 className='sider-icon'/>
                        </a>
                    </li>
                </ul>
            
        </div> 
    );
}

Sidebar.propTypes = {
    toggle: PropTypes.bool.isRequired
  };
export default Sidebar;