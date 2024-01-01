import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
const titele = {
  marginY: 3,
  fontSize: 25,
  fontWeight: 600,

 

};
const gridstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems:"center"};

export default function Footer() {
  return (
    
    <Box sx={{  minWidth:"100%",bgcolor:'#021C36;',color:'white',marginTop:"30px"}}>
      <Container>
      <Grid container spacing={4}>
  <Grid sx={gridstyle} item xs={6} lg={3}>
  <Image
        src="/google.png" 
        alt="Description of the image"
        width={200}
        height={80} 
      />
      </Grid>
      <Grid sx={gridstyle} item xs={6} lg={3}>
       <Image
        src="/BingCertified.png" 
        alt="Description of the image"
        width={200}
        height={60} 
      /></Grid>
      <Grid sx={gridstyle}  item xs={6} lg={3}>
       <Image
        src="/bbb.png" 
        alt="Description of the image"
        width={220}
        height={90} 
      />
  </Grid>
  <Grid sx={gridstyle}  item xs={6} lg={3}>
  <Image
        src="/UPCITY.png" 
        alt="Description of the image"
        width={100}
        height={100} 
      />
  </Grid>
 
 
</Grid>
        
<Grid container spacing={3}>
  <Grid item xs={12} md={6} lg={4}>
  <Typography  sx= {{ ...titele, ...{ color: '#ffa726' } }}>Funnel Boost Media</Typography>
  <Typography sx={{marginY: 3}}>3201 Cherry Ridge, Suite 328<br></br>
      San Antonio, Tx 78230<br></br>
     <span style={{color:'#ffa726'}}>(210) 503-8024<br></br></span> 
      8am-6pm Everyday
</Typography>
<Image
        src="/googled.png" 
        alt="Description of the image"
        width={200}
        height={80} 
      />
   
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
  <Typography sx={titele}>Digital Marketing Services</Typography>
  <Typography sx={{color:'#ffa726'}}>Local SEO<br></br>
National SEO Services<br></br>
PPC & Search Marketing<br></br>
Website Design & Development<br></br>
News & Blog
</Typography>
   
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
  <Typography sx={titele}>Resources</Typography>
  <Typography sx={{color:'#ffa726'}}>Privacy <br></br>
Terms of Service<br></br>
Contract Terms & Conditions<br></br>
Areas Of Coverage<br></br>
Careers<br></br>
Job Interview Phishing Scam Notice<br></br>
Sitemap
</Typography>
    
  </Grid>
</Grid>

        </Container>
    </Box>
    
 
  )
}