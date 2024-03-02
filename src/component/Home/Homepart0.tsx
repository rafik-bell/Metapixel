import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'


const gridstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems:"center"

 

};
const buttonstyle ={
  color:'var(--Bright_Gray)',
  fontSize: 15,
  fontWeight: 500,
  bgcolor:'var(--eminence)',
  padding:'25px',
  marginY:{xs:"10px",md:"20px"},
  borderRadius:"20px",
  fontFamily:'Text',
  '&:hover': {
  bgcolor:'var(--Bright_Gray)',
  textDecoration:'none',
  color :'var(--eminence)',
}
   

}

export default function Homepart0() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    
    <Carousel  sx={{marginBottom:'-30px'}}>
    <Box sx={{backgroundImage: "url('/slider1.jpg')",backgroundSize: 'cover',backgroundPosition: 'center',minHeight:'100vh' }}>
    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center' ,alignItems:'center',paddingY:{xs:'20%',md:'3%'},paddingTop:{xs:'50%',md:'17%'},px:{xs:'20px',md:'0px'}}}>
        <Image
        src="/White PNG 1.png" 
        alt="Description of the image"
        width={408}
        height={115}
        data-aos="fade-left"
       
      />
       

      <Typography  fontFamily='Text'  sx={{color:"white",textAlign:'center', fontSize:{xs:40,md:70},minHeight:{xs:'200px',md:'0px'}}}>Technology & Beyond<br></br></Typography>
      
      {/* <Button variant='contained'  sx={buttonstyle}>En savoir plus</Button> */}
      <hr style={{
        width: scrollY === 10 ? `calc(93vw + ${scrollY}px)` : `calc(93vw - ${scrollY}px)`,
        margin: '45px 0px',
      }}></hr>
    </Box>
   
    </Box>
    <Box sx={{backgroundImage: "url('/650 350.png')",backgroundSize: 'cover',backgroundPosition: 'center',minHeight:'100vh' }}>
    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center' ,alignItems:'center',paddingY:{xs:'20%',md:'3%'},paddingTop:{xs:'50%',md:'17%'},px:{xs:'20px',md:'0px'}}}>
        <Image
        src="/White PNG 1.png" 
        alt="Description of the image"
        width={408}
        height={115}
        data-aos="fade-left"
       
      />
       

      <Typography  fontFamily='Text'  sx={{color:"white",textAlign:'center', fontSize:{xs:40,md:70},minHeight:{xs:'200px',md:'0px'}}}>Technology & Beyond<br></br></Typography>
      
      {/* <Button variant='contained'  sx={buttonstyle}>En savoir plus</Button> */}
      <hr style={{
        width: scrollY === 10 ? `calc(93vw + ${scrollY}px)` : `calc(93vw - ${scrollY}px)`,
        margin: '45px 0px',
      }}></hr>
    </Box>
   
    </Box>
    </Carousel>
    
  )
}