import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
const gridstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems:"center"
};

export default function Homepart1() {
  return (
    <Box data-aos="fade-up" sx={{backgroundColor:'var(--Bright_Gray)', paddingY:"5%", paddingX:"20px", color:'white'}}>
        <Grid container spacing={2}>
  <Grid item  lg={6} >
    <Box sx={{paddingLeft:{md:'40px',sx:'0px'}}}>
        
      
<Typography mb='10px' mt='20px' color="var(--black)" variant='h4' fontFamily='Titre'><span style={{fontSize:50,color:"var(--eminence)"}}> Meta Pixel </span>TECHNOLOGY & BEYOND</Typography> 
<Typography mb='20px' fontFamily='Text' color="var(--black)" textAlign='justify'>Meta Pixel est une agence Digitale Globale qui met à votre disposition son expertise et tout son savoir-faire dans le domaine du Conseil en Management , l’Expertise Technologique et la Communication.
</Typography>
<Box sx={{textAlign:'center',
padding:'20px' ,
border:'2px solid var(--black)',
}}>
{/* <Typography variant='h5' color="var(--black)"  fontFamily='Sous-titre'> Nous Approche Holistique</Typography> */}

<Typography  fontFamily='Text' color="var(--black)" textAlign='justify' >Notre approche holistique combine une compréhension approfondie des nouvelles technologies avec une vision stratégique  susceptible de vous aider à tirer le meilleur parti de votre investissement numérique et  communication .<br></br>

Meta Pixel c'est un véritable collectif d'experts à forte valeur ajoutée , multidisciplinaire et multi secteur  
qui vous accompagne dans la réalisation de vos projet de développement et de pérennisation de votre Entreprise</Typography>
</Box>
</Box>
</Grid>
<Grid item sx={gridstyle}  lg={6}>

<Image
        src="/shutterstock.png" 
        alt="Description of the image"
        width={500}
        height={500} 
      />
   
  </Grid>
</Grid>

    </Box>
      
   
 
  )
}