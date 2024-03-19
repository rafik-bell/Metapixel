import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container, Grid, Paper, Typography, keyframes } from '@mui/material'
import image from '../../assets/image/WhitePNG1.png'

const gridstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems:"center"
};

export default function Homepart1() {
  return (
    <Box data-aos="fade-up" > 
      
      <Grid  data-aos="fade-up" container spacing={3}>
        
  <Grid item xs={12} md={8.5} >   
    <Box sx={{pr:{xs:'8%',md:'20%'},pl:{xs:'8%',md:"7%"},py:'3%',borderRadius:"10px" }}>
    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center' ,alignItems:'center'}}>

<Image
    src={image} 
    alt="Description of the image"
    width={340}
    height={96} 
  
   
  />
       

  </Box>  
      
    {/* <Typography variant='h4' color="var(--Bright_Gray)"  fontFamily='Sous-titre'> Meta Pixel</Typography> */}

<Box sx={{
  bgcolor:"var(--black)",
padding:'20px' ,
border:'2px solid var(--Bright_Gray)',
}}>
{/* <Typography variant='h5' color="var(--black)"  fontFamily='Sous-titre'> Nous Approche Holistique</Typography> */}
<Typography mb='10px'  color="var(--Bright_Gray)" fontSize={38} fontFamily='Sous-titre'>Notre expertise technologique au service de vos ambitions</Typography>
<Typography  fontFamily='Text' variant='h6' color="var(--vDBright_Gray)" textAlign='justify' >Meta Pixel est une agence Digitale Globale qui met à votre disposition son expertise et tout son savoir-faire dans le domaine du Conseil en Management ,l’Expertise Technologique et la Communication.</Typography>
<Box sx={gridstyle}><Button href='/QSN' variant="contained" sx={{ my:'30px',bgcolor: 'var(--eminence)', color: 'white', fontSize: 18,fontWeight:600, fontFamily:"Text", '&:hover': { bgcolor:'var(--Bright_Gray)' , color: 'var(--eminence)', } }}>Lire Plus...</Button></Box>

</Box>
</Box>
</Grid> 

</Grid> 

    </Box>
      
   
 
  )
}