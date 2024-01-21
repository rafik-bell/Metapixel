import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'
const titelstyle = { 
    borderLeft:'10px solid var(--eminence)',
    paddingLeft:'15px',
    my:'10px',
    borderRadius:'15px'
  };
  const secndgrid = { 
    borderLeft:{md:'10px solid var(--eminence)',xs:'none'},
    borderTop :{xs:'10px solid var(--eminence)',md:'none'},
    borderRadius:'15px'
  };
  const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center"
    , flexDirection:'column'
  
   
  
  };
  const steps =['1','2','3']

export default function Ss_part1() {
  return (
    <Box  sx={{marginY:'100px'}}>
        <Grid container spacing={3}>
  <Grid item xs={12} md={4}>
  <Typography data-aos="fade-down" variant='h3' sx={titelstyle} fontFamily='Titre' >Success <span style={{color:'var(--eminence)'}}>story</span> </Typography>
  <Typography   fontFamily='Text' textAlign='justify'>
        Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the 
industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and 
scrambled it to make a type specimen book. It has 
survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially 
unchanged. It was popularised in the 1960s with the 
release of Letraset sheets containing Lorem Ipsum
</Typography>
    
  </Grid>
  <Grid item xs={12} md={8}>

{/* secend grid */}
{steps.map((step, index) => (

  <Grid container spacing={3} my='30px'>
  <Grid item xs={12} md={4} sx={center}>
    
    <Typography textAlign='center' sx={{}} fontFamily='Titre' variant='h5' >202{step}</Typography>
    <Image
        src="/S-s.png" 
        alt="Description of the image"
        width={100}
        height={100} 
      />
        
    
    </Grid>
    <Grid item xs={12} md={8} sx={secndgrid}>
    
    <Typography  fontFamily='Titre' variant='h5' >Titel of Success {step}</Typography>
    <Typography   fontFamily='Text' textAlign='justify'>
        Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the 
industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and 
scrambled it to make a type specimen book. It has 
survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially 
unchanged. It was popularised in the 1960s with the 
release of Letraset sheets containing Lorem Ipsum
</Typography>
        
    </Grid>

    </Grid>
     ))}

    {/* secend grid */}
  </Grid>
  
</Grid>
        






    </Box>
      
   
  )
}
