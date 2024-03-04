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
    {image:"Developpement Technique.png",discription:"Développement Technique"},
    {image:"Gestion de Projet.png",discription:"Gestion de Projet"},
    {image:"Conseils & Audit.png",discription:"Conseils & Audit"},
    {image:"Installation Reseaux & Systemes.png",discription:"Installation Réseaux & Systèmes"},
    {image:"Formation.png",discription:"Formation"},
    {image:"Hebergement & Infogerance.png",discription:"Hébergement & Infogérance"}
  ]
  return (
    <Box  sx={{ px:{xs:'10px',md:'0px'},marginY:'100px'}}>
      <Box sx={{marginY:'30px'}}>
        <Typography data-aos="fade-down" variant='h3' sx={titelstyle} fontFamily='Titre' >Services</Typography>

        <Typography data-aos="fade-down" variant='h4' color='var(--eminence)' fontFamily='Sous-titre'>POLE TECHNOLOGY</Typography>
        <Typography variant='h6'   fontFamily='Sous-titre' textAlign='justify'>Nous vous offrons les moyens de réussir votre transition numérique en toute sécurité </Typography>
        <Typography  fontFamily='Text' textAlign='justify'>Nos équipes d'experts vous accompagnent dans vos projets IT en mettant à votre disposition leur expertise technique et toutes les solutions et outils technologiques nécessaires à la réalisation de vos objectifs. 
        <Typography  fontFamily='Text' textAlign='justify'> Nous nous engageons à vous fournir une prise en charge de qualité adapté à vos besoins et à votre secteur d’activité.</Typography>

        </Typography>
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
