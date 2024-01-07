import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
const bottonstyle ={
    border:'2px solid black',
    color:"black",
    fontWeight:550,
    padding:'10px 30px',
    marginY:'30px'


}


export default function Homepart2() {
  return (
    <Container sx={{mb:"80px"}}>
        <Grid  data-aos="fade-up" container spacing={3}>
  <Grid item xs={12} md={4} >
    <Box sx={{width:'300px',marginY:'40px'}}>
    <Typography  variant='h3'>Design.</Typography>
    <Typography>Let us create a digital property your company will love. Be proud to share your site with customers. </Typography>
    <Button sx={bottonstyle}>Read More</Button>
    </Box>
  </Grid>
  <Grid item xs={12} md={4}>
    <Box sx={{width:'300px',marginY:'40px'}}>
  <Typography fontFamily='mikhak'variant='h3'>Rank.</Typography>
    <Typography>We use 100% white-hat Google best SEO practices to rank your site at the top of the search engines. </Typography>
    <Button sx={bottonstyle}>Read More</Button>
    </Box>
    
  </Grid>
  <Grid item xs={12} md={4}>
    <Box  sx={{width:'300px',marginY:'40px'}}>
  <Typography  variant='h3'>Grow.</Typography>
    <Typography>Boost your leads and sales with a targeted pay-per-click campaign by digital marketing pros. </Typography>
    <Button sx={bottonstyle}>Read More</Button>
    </Box>
    
  </Grid>
  
</Grid>
     
    </Container>
 
  )
}