import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
const bottonstyle ={
    border:'2px solid black',
    color:"black",
    fontWeight:550,
    padding:'10px 30px',
    marginY:'30px',
    fontFamily:'Sous-titre'


}
const paperStyle = {
  padding: '30px',
  
  height:'220px',
  
  transition: 'box-shadow 0.3s', // Add a smooth transition for the box-shadow
  '&:hover': {
    boxShadow: '0 4px 8px var(--eminence)',
  },
};
const boxstyle={
  justifyContent: 'center',
  display: 'flex', 
  alignItems: 'center',
  flexDirection:'column',
  my:'30px'
 
}



export default function Homepart2() {
  const tecnoItem = [
    {discription:"Agilité"},
    {discription:"Innovation"},
    {discription:"Proximité"},
    {discription:"Engagement"},
    {discription:"Transparence"},
    
  ]
  return (
    <Box  sx={{ bgcolor:'var(--Bright_Gray)',}}>
       <Container sx={{py:'30px',textAlign:'center'}}>
        <Typography data-aos="fade-down" sx={{marginBottom:'30px',}} variant='h5' fontFamily='Titre' >NOTRE PHILOSOPHIE</Typography>

        <Typography data-aos="fade-down"  textAlign='justify' variant='h6' color='var(--black)' fontFamily='Sous-titre'>Nous aspirons à être un acteur majeur dans le processus de transformation numérique en Algérie et cela en accompagnant activement la transition Digitale des entreprises algériennes <br></br>
Nous nous engageons à offrir à nos partenaires les outils technologiques, l’expertise et l'accompagnement nécessaires à la réussite de leur transformation numérique. 
</Typography>
          </Container>
        <Grid  data-aos="fade-up" container spacing={3}>
        {tecnoItem.map((item, index) => (
  <Grid item xs={12} md={4} >
    <Box sx={{width:'300px',marginY:'40px'}}>
    <Box sx={boxstyle}>
       <Typography  variant='h5' color='var(--eminence)' fontFamily='Titre'>{item.discription}</Typography>
       </Box>
    </Box>
  </Grid>
   ))}
</Grid>
     
    </Box>
 
  )
}