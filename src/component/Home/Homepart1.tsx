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
  <Grid item  lg={5} >
    <Box sx={{paddingLeft:{md:'40px',sx:'0px'}}}>
        <Button  variant='contained'
         sx={{backgroundColor:'var(--orange)',
        width:"250px",
        height:"75px",fontSize:'large',
        fontFamily:'Sous-titre'}}>
        SIMPLE PRICING
        </Button>
      
<Typography mb='20px' mt='20px' variant='h3' fontFamily='Titre'><span style={{color:"var(--orange)"}}> Internet Marketing </span> With Transparent Pricing</Typography>
<Typography mb='20px' fontFamily='Text'>We’re confident in our digital marketing services. If you have any questions or would like a service you don’t see listed, don’t hesitate to ask.</Typography>
<Box sx={{textAlign:'center',
padding:'20px' ,
border:'2px solid var(--orange)'}}>
<Typography variant='h5' color="var(--orange)"  fontFamily='Sous-titre'>We Know Big And Small Business</Typography>

<Typography  fontFamily='Text' >Since 2012, Funnel Boost Media has provided internet marketing services in San Antonio, TX. Through our demonstrated passion for measurable lead generation strategies, we’ve helped businesses across the country recognize search engines as one of their most valued marketing tools.</Typography>
</Box>
</Box>
</Grid>
<Grid item sx={gridstyle}  lg={7}>

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