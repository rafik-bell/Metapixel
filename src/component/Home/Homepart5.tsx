import { Box, Button, Container, Grid, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
const boxstyle={
    justifyContent: 'center',
  display: 'flex', 
  
  flexDirection:'column'
 

}
const boxstyle1={
    justifyContent: 'center',
    display: 'flex', 
    
    flexDirection:'column',
    mb:'20px'
 

}
const bottonstyle={
    color:'var(--Bright_Gray)',
    fontSize: 15,
    fontWeight: 600,
    width:'200px',
    
    bgcolor:'var(--black)', 
    '&:hover': {bgcolor:'var(--Bright_Gray)',color :'var(--black)',}, 

}
export default function Homepart5() {
  return (
    <Container  sx={{bgcolor: "white",height:'100vh',mb:'60px'}}>
  <Grid  data-aos="fade-up" container spacing={3}>
       
  <Grid item xs={12} md={5} >
    <Box sx={{marginY:'40px'}}>
    <Box >
       <Typography  variant='h3' textAlign='center' color='var(--black)' fontFamily='Text'>Write US</Typography>
       </Box>
    </Box>
  </Grid>
  <Grid item xs={12} md={7} >
    
    <Box sx={boxstyle}>
      <Box sx={boxstyle1}> <Typography   textAlign='left' variant='h6' color='var(--black)' fontFamily='Text'>Name</Typography>
       <TextField id="standard-basic" style={{ fontFamily:'Text'}}placeholder="Enter your Name" label="" variant="standard" />
       </Box>
      <Box sx={boxstyle1}>
    <Typography   textAlign='left' variant='h6' color='var(--black)' fontFamily='Text'>Email</Typography>
       <TextField id="standard-basic" style={{ fontFamily:'Text'}} placeholder="Enter your valid email address" label="" variant="standard" />
       </Box>
      <Box sx={boxstyle1}> 
        <Typography   textAlign='left'  variant='h6' color='var(--black)' fontFamily='Text'>Write US</Typography>
       <TextareaAutosize
        minRows={3}
        placeholder="Massege ..."
        
       
        style={{ fontFamily:'Text', width: '100%',height:250, resize: 'none' }}
      />
      </Box>
       <Button variant='contained' href='/Login' sx={bottonstyle}>Submit</Button>
       </Box>
  </Grid>
 
</Grid>






    </Container>
      
    
  )
}
