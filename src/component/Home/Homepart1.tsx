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
    <Container data-aos="fade-up" sx={{backgroundColor:'var(--eminence)', paddingY:"5%", marginBottom:"100px", color:'white'}}>
        <Grid container spacing={2}>
  <Grid item  lg={6} >
    <Box sx={{paddingLeft:{md:'40px',sx:'0px'}}}>
        <Button  variant='contained'
         sx={{backgroundColor:'var(--orange)',
        width:"250px",
        height:"75px",fontSize:'large',
        fontFamily:'Sous-titre'}}>
        SIMPLE PRICING
        </Button>
      
<Typography mb='10px' mt='20px' variant='h4' fontFamily='Titre'><span style={{fontSize:50,color:"var(--orange)"}}> Meta Pixel </span>TECHNOLOGY & BEYOND</Typography>
<Typography mb='20px' fontFamily='Text' textAlign='justify'>Meta Pixel est une agence Digitale algérienne pluridisciplinaire qui met à votre disposition son expertise et tout son savoir-faire dans le domaine du conseil en management et de l’expertise technologique. </Typography>
<Box sx={{textAlign:'center',
padding:'20px' ,
border:'2px solid var(--orange)'}}>
<Typography variant='h5' color="var(--orange)"  fontFamily='Sous-titre'>We Know Big And Small Business</Typography>

<Typography  fontFamily='Text'  textAlign='justify' >Since 2012, Funnel Boost Media has provided internet marketing services in San Antonio, TX. Through our demonstrated passion for measurable lead generation strategies, we’ve helped businesses across the country recognize search engines as one of their most valued marketing tools.</Typography>
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

    </Container>
      
   
 
  )
}