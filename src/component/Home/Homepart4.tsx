import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
const textnstyle ={
    border:"5px solid var(--eminence)",
    padding:'20px',
    color:'var(--eminence)',
    maxWidth:{xs:'100%',md:'50%'}

}
const textnstyle1 ={
    border:"5px solid var(--eminence)",
    padding:'5px',
    color:'var(--Bright_Gray)',
    backgroundColor:'var(--eminence)'

}
const textnstyle2 ={
    border:"5px solid var(--eminence)",
    borderRadius:'50%',
    padding:'10px',
    color:'var(--Bright_Gray)',
    backgroundColor:'var(--eminence)'

}
const paperStyle = {
  padding: '30px',
  justifyContent: 'center',
  display: 'flex', 
  alignItems: 'center',
  
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
  flexDirection:{xs:'column',md:"row"}
 
 
 
}



export default function Homepart4() {
  const tecnoItem = [
    {num:"1",discription:"Nous analysons votre environnement interne et externe afin de vous délivrer une vision à 360° de votre environnement, ses lacunes,  ses potentiels, ses risques et ses opportunités",titel:"PRISE DE HAUTEUR"},
    {num:"2",discription:"Nous élaborons pour vous les meilleures stratégies pour apporter sens et cohérence dans toutes vos prises de paroles en tenant en compte vos enjeux Business et Corporate",titel:"RÉFLEXION",},
    {num:"3",discription:"Nous créons pour vous les concepts et les contenus  les plus créatifs afin de  vous offrir un  territoire d'expression  unique  et singulier.",titel:"CRÉATION",},
    {num:"4",discription:"Nous planifions , produisons , déployons et moniotrons  toutes vos actions  sur tous les  canaux , selon les planning arrêtés",titel:"ACTION",},
    {num:"5",discription:"Nous réalisons pour vous des bilans post-mortem et vous proposons des analyses détaillées de vos KPI et du retour sur investissement de vos actions, dans une optique d'optimisation et d’amélioration continue.",titel:"INTROSPECTION",}
    
    
  ]
  return (
    <Container sx={{mb:"80px"}}>
       <Box sx={{marginY:'30px',textAlign:'center'}}>
        <Typography data-aos="fade-down" sx={{marginY:'30px',}} variant='h5' fontFamily='Titre' >NOTRE METHODOLOGIE</Typography>

        <Typography variant='h6'  fontFamily='Text'>Notre méthodologie est construite autour de nos partenaires ,  elle nous garantit une parfaite connaissance de leur environnement et de leurs enjeux Business et Corporate</Typography>
        <Typography variant='h6'  fontFamily='Text'>Elle garantit également une collaboration optimale et un suivi permanente de toutes les phases des projets lancés</Typography>
        <Box sx={boxstyle}>
        
        <Typography variant='h6' sx={textnstyle} fontFamily='Sous-titre'>Notre méthodologie se déploie en 5 étapes majeures</Typography>
        </Box>
          </Box>
        <Grid  data-aos="fade-up" sx={boxstyle} container spacing={1}>
        {tecnoItem.map((item, index) => (
  <Grid item xs={12} md={4} key={index} >
    <Box sx={{width:'300px',marginY:'40px'}}>
    <Typography  variant='h5' textAlign='center' sx={{my:'20px'}} fontFamily='Titre' ><span style={textnstyle2}>{item.num}</span></Typography>
    <Typography data-aos="fade-down" variant='h5' textAlign='center' sx={textnstyle1} fontFamily='Titre' >{item.titel}</Typography>
    <Paper elevation={3} sx={paperStyle}>
    
    <Typography  sx={{color:'var(--eminence)'}} fontFamily='Sous-titre' textAlign='center' >{item.discription}</Typography>
    
   
    </Paper>
    

    </Box>
  </Grid>
   ))}
  
</Grid>
     
    </Container>
 
  )
}