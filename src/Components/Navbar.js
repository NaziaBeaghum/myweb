import React, { useEffect } from 'react'
import './Navbar.css'
import { Link ,useLocation} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';



const Navbar = () => {

  const[toggle,setToggle]=useState(true)
  const location =useLocation()

  const handleClick=()=>{
    setToggle(!toggle)
  }

  useEffect(()=>{
    setToggle(false)
  },[location]);

  return (
    <div className="navbar_container ">
        
        <h4 className="logo_img">
             <Link to='/'>Portfolio.</Link>
        </h4>
        
       <div className="flex2">
           <ul className={toggle?'nav--visible':'nav--hidden flex navbar_ul'}>
              <li className='nav_list'><NavLink to='/'>Home</NavLink></li>
              <li  className='nav_list'><NavLink to='/projects'>Projects</NavLink></li>
              <li  className='nav_list'><Link to='/Technologies'>Technologies</Link></li>
           </ul>       
       </div>
           
        <div className='nav_menu' onClick={handleClick}>
          {toggle?<CloseIcon/>:<MenuIcon/>}
          
          </div>      
              

    </div>
  )
}

export default Navbar