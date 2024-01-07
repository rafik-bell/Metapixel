import Head from 'next/head'
import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'


const gridstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems:"center"

 

};

export default function Homepart0() {
  
  return (
    <Box sx={{marginY:'70px'}}>
    <Box sx={{bgcolor:'var(--eminence)',display:'flex', flexDirection:'column',justifyContent:'center' ,alignItems:'center',paddingY:'5%'}}>
        <Image
        src="/head.png" 
        alt="Description of the image"
        width={400}
        height={480} 
       
      />
      <Typography fontWeight='700'  sx={{color:"white",textAlign:'center', fontSize:{xs:25,md:45},marginTop:{xs:'-50%',md:'-20%'},zIndex:1,minHeight:{xs:'200px',md:'0px'}}}>Award-Winning Digital Marketing Agency<br></br>
We Love Website Design, SEO & PPC</Typography>
       
    </Box>
    <Grid container spacing={5} sx={{backgroundColor:'var(--eminence)',zIndex:2, paddingY:"5%" ,overflow:'hidden'}}>
  <Grid data-aos="fade-right" sx={gridstyle} item xs={4}md={2.4}>
  <Image
        src="/2022-national.png" 
        alt="Description of the image"
        width={120}
        height={120} 
        style={{opacity:"70%"}}
       
      />
  </Grid>
  <Grid data-aos="fade-right" sx={gridstyle} item xs={4} md={2.4}>
  <Image
        src="/clutch_1000.png" 
        alt="Description of the image"
        width={120}
        height={120} 
        style={{opacity:"70%"}}
       
      />
  </Grid>
  <Grid sx={gridstyle} item xs={4} md={2.4}>
  <Image
        src="/v2-featured.png" 
        alt="Description of the image"
        width={150}
        height={150} 
        style={{opacity:"70%"}}
       
      />
  </Grid>
  <Grid data-aos="fade-left" sx={gridstyle} item  xs={6} md={2.4}>
  <Image
        src="/clutch_veteran.png" 
        alt="Description of the image"
        width={120}
        height={120} 
        style={{opacity:"70%"}}
       
      />
  </Grid>
  <Grid data-aos="fade-left" sx={gridstyle} item xs={6} md={2.4}>
  <Image
        src="/tx_san-antonio.png" 
        alt="Description of the image"
        width={120}
        height={120} 
        style={{opacity:"70%"}}
       
      />
  </Grid>
</Grid>
    </Box>
  )
}