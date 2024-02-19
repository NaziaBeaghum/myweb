import React from 'react'
import './Content.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Content = () => {
  return (
    <>
    
    <div className='home_container'>
     
         <div className="content">
          <div className="home_content">

            <p>Hi,Im  Nazia</p>
            <h2>React<span className='content_span'>Developer</span></h2>
            <div className='btn_div'>
              <a href='https://docs.google.com/document/d/1GNcXa-lf1jMrTQ2uf8veqVnZ5X6SSXD5UM20ymVkdZg/edit?usp=sharing' className='home_btn'>Resume</a>
              <button className='home_btn' ><Link to='/contact' >Contact me </Link></button>
            </div>

           </div> 
        </div>
   </div>
   </>
  )
}

export default Content