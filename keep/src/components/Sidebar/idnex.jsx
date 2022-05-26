import React from 'react';
import PropTypes from 'prop-types';
import {GoLightBulb} from 'react-icons/go'
import{BsBell} from 'react-icons/bs'
import {BiPencil,BiArchiveIn} from 'react-icons/bi'
import {FiTrash2} from'react-icons/fi'
import { Link, Outlet } from 'react-router-dom';
import './style.css'
function Sidebar({toggle}) {
    return (
     <div className='page-content'>
    {!toggle?
        <div className="expanded">
            <div className='sidebar'>
                <ul>
                    <li>
                        <Link to='/'>          
                       <GoLightBulb  className='sider-icon'/>
                        <span className='links_name'>Notes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/reminder'>
                            <BsBell className='sider-icon'/>
                            <span className='links_name'>Reminders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/archive'>
                        <BiPencil className='sider-icon'/>
                            <span className='links_name'>Edit lable</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/edit'>
                            <BiArchiveIn className='sider-icon'/>
                            <span className='links_name'>Archive</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/trash'>
                            <FiTrash2 className='sider-icon'/>
                            <span className='links_name'>Trash</span>
                        </Link>
                    </li>
                </ul>
            
        
       
       
        </div>
        </div>:  
        <div className='non-expanded'>     
         <div className='sidebar2'>
                <ul>
                    <li>
                        <Link to='/'>          
                       <GoLightBulb  className='sider-icon'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/reminder'>
                            <BsBell className='sider-icon'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/edit'>
                        <BiPencil className='sider-icon'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/archive'>
                            <BiArchiveIn className='sider-icon'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/trash'>
                            <FiTrash2 className='sider-icon'/>
                        </Link>
                    </li>
                </ul>
            
        </div> 
        </div>
        }
        <div className='cards-conatiner'>
        <Outlet></Outlet>
        </div>
        </div>
    )
}

Sidebar.propTypes = {
    toggle: PropTypes.bool.isRequired
  };
export default Sidebar;