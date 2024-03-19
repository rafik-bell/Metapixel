import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container, Grid, Paper, Typography, keyframes } from '@mui/material'
import image from '../../assets/image/Finalpng1.png'
import image1 from '../../assets/image/WhitePNG1.png'

const gridstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems:"center"
};
const QSNpart1 = () => {
  return (
    <Box data-aos="fade-up" sx={{paddingTop:'70px', backgroundImage: `url(${image.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom:'55px'}} > 
      
      <Grid  data-aos="fade-up" container spacing={3}>
        
  <Grid item xs={12} md={12} >   
    <Box sx={{pr:{xs:'8%',md:'20%'},pl:{xs:'8%',md:"7%"},py:'3%',borderRadius:"10px" }}>
    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center' ,alignItems:'center'}}>
    <Typography mb='10px'  color="var(--Bright_Gray)" fontSize={42} fontFamily='Sous-titre'>QUI SOMMES-NOUS ?</Typography>
{/* <Image
    src={image1} 
    alt="Description of the image"
    width={340}
    height={96} 
  
   
  /> */}
       

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

<Typography  fontFamily='Text' variant='h6' color="var(--vDBright_Gray)" textAlign='justify' >Notre approche holistique combine une compréhension approfondie des nouvelles technologies avec une vision stratégique  susceptible de vous aider à tirer le meilleur parti de votre investissement numérique et  communication .<br></br>

Meta Pixel c'est un véritable collectif d'experts à forte valeur ajoutée , multidisciplinaire et multi secteur  
qui vous accompagne dans la réalisation de vos projets de développement et de pérennisation de votre Entreprise.
</Typography>
<Box sx={gridstyle}></Box>

</Box>
</Box>
</Grid> 

</Grid> 

    </Box>
  )
}

export default QSNpart1