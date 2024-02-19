import React from 'react'
import Navbar from '../Components/Navbar'
import './pages.css'

const Technologies = () => {
  
  const skills=[{name:"HTML5",
                 logo:"assets/html.png"
                 },
                 {name:"CSS3",
                 logo:"assets/css3-logo-.png"
                 },
                 {name:"Javascript",
                 logo:"assets/js.png"
                 },
                 {name:"React",
                 logo:"assets/react.png"
                 },
                 {name:"Github",
                 logo:"assets/github.png"
                 },
                {
                  name:"material UI",
                  logo:"assets/mui.png"
                },
                {
                  name:"firebase",
                  logo:"assets/firebase.png"
                }

                ]
   
  return (
    <div className='technologies_container' >
      
      
      <h4 style={{textAlign:"center",fontSize:"2rem",fontWeight:"bold"}}> Top Skills</h4>
      <div className='logos_div'>
        
        {skills.map((item)=>(
          <>
            
            <img src={item.logo} alt='' className='skills_logo'/>

          </>
        )
        )}
      </div>

     </div>
  )
}

export default Technologies