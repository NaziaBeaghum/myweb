import React from 'react'

import { Box,Stack,Card,CardContent,CardMedia, Typography } from "@mui/material";
import data from '../Components/data';



const Project = () => {
  
  
  
  return (
     <div className='project_container' >
      
     <div>
       
       <Typography variant='h4' textAlign="center" marginBottom=".8em">Few of my works</Typography>
      <Box sx={{px:{md:0,xs:4},py:{xs:2},marginLeft:"auto",marginRight:"auto",width:"80%",height:"none"}}>
        
            <Stack sx={{flexDirection:{md:"row",xs:"column"},gap:{md:3,xs:6},flexWrap:"wrap",justifyContent:"start"}}>
            {data.map((item)=>{return<Card  sx={{width:{md:'320px',xs:'100%'},bordeShadow:"none"}}>

                    <CardMedia image={item.img} alt="" sx={{width:"358px",height:"200px"}}/>
                    
                    <CardContent sx={{height:'80px',backgroundColor:"#F29878" ,color:"white"}}>
                        <Typography style={{color:"#163977",fontSize:"1rem"}}>{item.description}</Typography>
                        <Stack direction="row" justifyContent="space-between" py={1}>
                            <a className='code_btn' href={item.url.code}>code</a>
                            <a className='code_btn' href={item.url.demo}>demo</a>
                        </Stack>  
                   </CardContent>

                </Card>})}
                </Stack>
        </Box>
      </div>
      </div>
  )
}

export default Project