import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Grid, Typography,Link } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';

const titele = {
  marginY: 3,
  fontSize: 25,
  fontWeight: 600,
  fontFamily:'Sous-titre'

 

};
const gridstyle = {
  display: 'flex',
  justifyContent: 'start',
  alignItems:"center",
  marginY: 1,
};

export default function Footer() {
  return (
    
    <Box sx={{  minWidth:"100%",bgcolor:'var(--black)',color:'white'}}>
      <Container>
      <Grid container spacing={1}>
  <Grid sx={gridstyle} item  lg={12}>
  <Image
        src="/White PNG.png" 
        alt="Description of the image"
        width={340}
        height={96} 
      />
      </Grid>
      
 
 
</Grid>
        
<Grid container spacing={3} >
  <Grid item xs={12} md={6} lg={3}>
  <Typography  sx= {{ ...titele, ...{ color:"var(--Bright_Gray)" } }}>MetaPixel</Typography>
  <Typography fontFamily='Text' sx={{marginY: 3, color:"var(--Bright_Gray)"}}>contactez<br></br>
  Expertise de confidentialité
<br></br>
Nôtre Philosophie<br></br>
Note philosophie<br></br>
<br></br>

</Typography>

   
  </Grid>
  <Grid item xs={12} md={6} lg={3}>
  <Typography sx= {{ ...titele, ...{ color:"var(--Bright_Gray)" } }}>Services</Typography>
  <Typography  fontFamily='Text' sx={{color:"var(--Bright_Gray)"}}>
  <Box sx={gridstyle}><Link sx={{ textDecoration:'none',color:"var(--Bright_Gray)"}} href='\POLE_TECHNOLOGY' >POLE TECHNOLOGY</Link> <br></br></Box> 
  <Box sx={gridstyle}><Link sx={{ textDecoration:'none',color:"var(--Bright_Gray)"}}  href='\POLE_CREA_&_CONSEIL' >Pole Créa & Conseil</Link> <br></br></Box> 
  <Box sx={gridstyle}><Link sx={{ textDecoration:'none',color:"var(--Bright_Gray)"}}  href='\POLE_DIGITAL_&_INFLUENCE'>Pole Digital & Influence</Link> <br></br></Box> 

</Typography>
   
  </Grid>
  <Grid item xs={12} md={6} lg={3}>
  <Typography  sx= {{ ...titele, ...{ color:"var(--Bright_Gray)" } }}>Adresse</Typography>
  <Typography fontFamily='Text' sx={{marginY: 3, color:"var(--Bright_Gray)"}}><PlaceIcon style={{marginBottom:'-4px'}}/> Cité Boubsila , Rue Djadel Mohamed, N° 11 rez de chaussée commune de Ouled Fayet, Alger

</Typography>

   
  </Grid>
  <Grid item xs={12} md={6} lg={3}>
  <Typography sx= {{ ...titele, ...{ color:"var(--Bright_Gray)" } }}>Nous</Typography>
  <Typography  fontFamily='Text' sx={{color:"var(--Bright_Gray)" }}> Politique  <br></br>
 <Box sx={gridstyle}><LinkedInIcon/><Link sx={{ textDecoration:'none',color:"var(--Bright_Gray)"}} href='https://www.linkedin.com/company/meta-pixel-algeria/' target="_blank">Linkedin</Link> <br></br></Box> 
 <Box  sx={gridstyle}><FacebookIcon/><Link sx={{ textDecoration:'none',color:"var(--Bright_Gray)"}} href='https://www.facebook.com/MetaPixelDZ' target="_blank">Facebook </Link><br></br></Box>
 <Box sx={gridstyle}><LocalPhoneIcon/>+213 770 11 70 03<br></br></Box> 

</Typography>
    
  </Grid>
</Grid>

        </Container>
    </Box>
    
 
  )
}