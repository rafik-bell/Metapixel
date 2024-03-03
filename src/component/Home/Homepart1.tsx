import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container, Grid, Paper, Typography, keyframes } from '@mui/material'
const textShadowPopBr = keyframes`
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px 1px #555555, 2px 2px #555555, 3px 3px #555555, 4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555, 8px 8px #555555;
    -webkit-transform: translateX(-1px) translateY(-1px);
            transform: translateX(-1px) translateY(-1px);
  }
`;
const gridstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems:"center"
};

export default function Homepart1() {
  return (
    <Box data-aos="fade-up" sx={{backgroundColor:'var(--Bright_Gray)',ml:{xs:'0px',md:'8%'} ,paddingX:"20px",pb:'20px', color:'white'}}> 
       <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center' ,alignItems:'center'}}>

    <Image
        src="/Logo PNG.png" 
        alt="Description of the image"
        width={340}
        height={96} 
      
       
      />
            <Typography mb='10px' textAlign='center' sx={{maxWidth:{xs:'100%',md:'60%'}}} color="var(--black)" fontSize={32} fontFamily='Text'>Notre expertise technologique au service de vos ambitions</Typography>

      </Box>
      <Grid  data-aos="fade-up" container spacing={3}>
        
  <Grid item xs={12} md={9} >   
    <Box sx={{bgcolor:'var(--mDBright_Gray)',pr:{xs:'8%',md:'30%'},pl:{xs:'8%',md:"10%"},py:'7%',borderRadius:"10px" }}>
        
      
    <Typography variant='h4' color="var(--eminence)"  fontFamily='Sous-titre'> Meta Pixel</Typography>
<Typography mb='20px' fontFamily='Text'  color="var(--black)" textAlign='justify'>Meta Pixel est une agence Digitale Globale qui met à votre disposition son expertise et tout son savoir-faire dans le domaine du Conseil en Management , l’Expertise Technologique et la Communication.
</Typography>
<Box sx={{textAlign:'center',
padding:'20px' ,
border:'2px solid var(--black)',
}}>
{/* <Typography variant='h5' color="var(--black)"  fontFamily='Sous-titre'> Nous Approche Holistique</Typography> */}

<Typography  fontFamily='Text' color="var(--black)" textAlign='justify' >Notre approche holistique combine une compréhension approfondie des nouvelles technologies avec une vision stratégique  susceptible de vous aider à tirer le meilleur parti de votre investissement numérique et  communication .<br></br>

Meta Pixel c'est un véritable collectif d'experts à forte valeur ajoutée , multidisciplinaire et multi secteur
qui vous accompagne dans la réalisation de vos projet de développement et de pérennisation de votre Entreprise</Typography>
</Box>
</Box>
</Grid> 
<Grid item xs={12} md={4}  sx={{ display:{xs:'none',md:'block'},marginLeft:{xs:'0%',md:'-15%'},marginTop:{xs:'-95%',md:'7%'}}}>
<Box sx={{  boxShadow: '10px 10px 10px rgba(0.5, 0.5, 0.5, 0.5)',borderRadius:"10px" }}>
    <Image
      src="/1708446657728.png"
      alt="Description of the image"
      width={450}
      height={450}
      style={{borderRadius:"10px" }}
    />
  </Box>
</Grid>
</Grid> 

    </Box>
      
   
 
  )
}