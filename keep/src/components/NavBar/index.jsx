import React from 'react';
import PropTypes from 'prop-types';
import { FiMenu,FiSearch,FiGrid,FiSettings } from 'react-icons/fi';
import {IoReload} from 'react-icons/io5'
import {BsFillGrid3X3GapFill}from 'react-icons/bs'
import {MdOutlineViewAgenda} from 'react-icons/md'
import './style.css'
function NavBar({setToggle,view,setView}) { 
    return (
        <div className='NavBar'>
              <div className='first-section'>
                <div className='icon'>
                    <FiMenu onClick={()=>setToggle((prev)=>!prev)}/>
                </div>
                <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png'/>
                <a href='#'>Keep</a>
            </div>
            <div className='secand-section'>
                <FiSearch/>
                <input placeholder='Search'/>
            </div>
            <div className='third-section'>
                <div className='right-section'>
                    <div className='icon'>
                        <IoReload/>
                    </div>
                    <div className='icon'>
                        {view==="grid"?  <MdOutlineViewAgenda
                        onClick={()=>setView('list')}/>:
                        <FiGrid onClick={()=>setView('grid') }/>}                     
                    </div>
                    <div className='icon'>
                        <FiSettings/>
                    </div>
                </div>
                <div className='left-section'>
                    <div className='icon'>
                        <BsFillGrid3X3GapFill/>
                    </div>
                    <span className='avater'>F</span>
                </div>
            </div>
            
        </div>
    );
}
NavBar.propTypes = {
    setToggle: PropTypes.func.isRequired,
    view:PropTypes.string.isRequired,
    setView:PropTypes.func.isRequired
  };

export default NavBar;