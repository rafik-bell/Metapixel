import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Grid, Typography } from '@mui/material'


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
  marginY:{xs:"10px",md:"80px"},
  borderRadius:"20px",
  '&:hover': {
  bgcolor:'var(--Bright_Gray)',
  textDecoration:'none',
  color :'var(--eminence)',
}
   

}

export default function Homepart0() {
  
  return (
    <Box sx={{backgroundImage: "url('/650 350.png')",backgroundSize: 'cover',backgroundPosition: 'center'}}>
    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center' ,alignItems:'center',paddingY:{xs:'50%',md:'3%'},paddingTop:{xs:'50%',md:'17%'}}}>
        <Image
        src="/White PNG.png" 
        alt="Description of the image"
        width={408}
        height={115}
        data-aos="fade-down"
       
      />
      

      <Typography  fontFamily='Text'  sx={{color:"white",textAlign:'center', fontSize:{xs:40,md:70},minHeight:{xs:'200px',md:'0px'}}}>Technology & Beyond<br></br></Typography>
      <Button variant='contained'  sx={buttonstyle}>En savoir plus</Button>
       
    </Box>
   
    </Box>
  )
}