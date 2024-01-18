import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
const bottonstyle ={
    border:'2px solid black',
    color:"black",
    fontWeight:550,
    padding:'10px 30px',
    marginY:'30px',
    fontFamily:'Sous-titre'


}


export default function Homepart2() {
  return (
    <Container sx={{mb:"80px"}}>
        <Grid  data-aos="fade-up" container spacing={3}>
  <Grid item xs={12} md={4} >
    <Box sx={{width:'300px',marginY:'40px'}}>
    <Typography  variant='h4' fontFamily='Titre'>CONSEIL & GESTION.</Typography>
    <Typography fontFamily='Text'>Let us create a digital property your company will love. Be proud to share your site with customers. </Typography>
    <Button href='\Service_CONSEIL_GESTION' sx={bottonstyle}>Read More</Button>
    </Box>
  </Grid>
  <Grid item xs={12} md={4}>
    <Box sx={{width:'300px',marginY:'40px'}}>
  <Typography fontFamily='Titre' variant='h4'>CREATION & DEVELOPPEMENT.</Typography>
    <Typography fontFamily='Text'>We use 100% white-hat Google best SEO practices to rank your site at the top of the search engines. </Typography>
    <Button href='\Service_CREATION_DEVELOPPEMENT' sx={bottonstyle}>Read More</Button>
    </Box>
    
  </Grid>
  <Grid item xs={12} md={4}>
    <Box  sx={{width:'300px',marginY:'40px'}}>
  <Typography fontFamily='Titre'  variant='h4'>ANALYSE & REPORTING.</Typography>
    <Typography fontFamily='Text'>Boost your leads and sales with a targeted pay-per-click campaign by digital marketing pros. </Typography>
    <Button href='\Service_ANALYSE_REPORTING' sx={bottonstyle}>Read More</Button>
    </Box>
    
  </Grid>
  
</Grid>
     
    </Container>
 
  )
}