import { Box, Grid, Paper, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react'
import Image from 'next/image';
const titelstyle = { 
    borderLeft:'10px solid var(--eminence)',
    paddingLeft:'15px',
    my:'10px',
    borderRadius:'15px'
  };
  const paperStyle = {
    padding: '30px',
    justifyContent: 'center',
    display: 'flex', 
    alignItems: 'center',
    flexDirection:'column',
    height:'220px',
    
    transition: 'box-shadow 0.3s', // Add a smooth transition for the box-shadow
    '&:hover': {
      boxShadow: '0 4px 8px var(--eminence)',
    },
  };
  

export default function Part1() {
  const tecnoItem = [
    {image:"Développement Technique.png",discription:"Développement Technique"},
    {image:"Gestion de Projet.png",discription:"Gestion de Projet"},
    {image:"Conseils & Audit.png",discription:"Conseils & Audit"},
    {image:"Installation Réseaux & Systèmes.png",discription:"Installation Réseaux & Systèmes"},
    {image:"Formation.png",discription:"Formation"},
    {image:"Hébergement & Infogérance.png",discription:"Hébergement & Infogérance"}
  ]
  return (
    <Box  sx={{marginY:'100px'}}>
      <Box sx={{marginY:'30px'}}>
        <Typography data-aos="fade-down" variant='h3' sx={titelstyle} fontFamily='Titre' >Services</Typography>

        <Typography data-aos="fade-down" variant='h4' color='var(--eminence)' fontFamily='Sous-titre'>POLE TECHNOLOGY</Typography>
        <Typography   fontFamily='Text' textAlign='justify'>Nous vous offrons les moyens de réussir votre transition numérique en toute sécurité </Typography>
        <Typography  fontFamily='Text' textAlign='justify'>Nos équipes d'experts vous accompagnent dans vos projets  en mettant à votre disposition leur expertise technique  et toutes  les solutions  et outils technologiques nécessaires à la mise en place de systèmes d’information modernes ,intelligents et performants. 
          Nos équipes d'experts s'engagent à être vos interlocuteurs uniques sur tous les volets de vos projets  IT : 
          <Typography fontFamily='Sous-titre' >Audit et Diagnostic , Project Managment ,Développement , Acquisition de Licences, Intégration, Infrastructure, Support et Maintenance, et bien plus encore.</Typography>
          Nous avons les profils  qu'ils vous faut et la formule qui convient à vos besoins :
          <Typography fontFamily='Sous-titre' >- Mode Full Intégration <br></br>
          - Mode Projet<br></br>
          - Mode Assistance</Typography></Typography>
          </Box>
        <Grid  data-aos="fade-up" container spacing={2}>
        {tecnoItem.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3}  sx={paperStyle}>
            <Image
        src={`/${item.image}`}
        alt="Description of the image"
        width={150}
        height={150} 
        objectFit='contain'
      />
            <Typography variant='h6' textAlign='center' color='var(--eminence)' fontFamily='Titre'>{item.discription}</Typography>
            </Paper>
            
        </Grid>
        ))}
        
        </Grid>

    </Box>
  )
}
