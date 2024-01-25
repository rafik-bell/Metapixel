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
    my: '30px',
    
    transition: 'box-shadow 0.3s', // Add a smooth transition for the box-shadow
    '&:hover': {
      boxShadow: '0 4px 8px var(--eminence)',
    },
  };
  const boxstyle={
    justifyContent: 'center',
    display: 'flex', 
    alignItems: 'center',
   
  }
  

export default function Cd_part1() {
  const tecnoItem = [
    {image:['Picture1','Picture2','Picture3'],discription:"Conseil en Communication et Stratégie de Marque",item:['udit de Marque','Développement architecture & plateforme de Marque','Positionnement et  Définition  Territoire Expression de Marque.',' Refont de Marque','Gestion de conflit','Brand Induction Interne','Elaboration Plan de Communication'   ]},
    {image:['Picture4','Picture5','Picture6'],discription:"Création graphique",item:['Développement Identité Visuelle',' Développement Concept Créatif','Développement Charte Web & Digitale','Conception Print','Conception Packaging','Conception signalétique & Branding  interne & externe Illustration']},
    {image:['Picture7','Picture8','Picture9','Picture10'],discription:"Production",item:['Production film marque et institutionnelle','Production film produit','Production Reportage ou documentaire','Couverture dévènement & interview','Production de film et capsules interne','Production de Web Serie , Motion Design ','Production Print et support de communication BTL','Conception et Production stand foire & salon','Aménagement et Branding locaux et espace de travail ']},
    {image:['Picture11','Picture12','Picture13'],discription:"Operations",item:['Préparation , Organisation et gestion des Evènements , externes & internes','Préparation , Organisation et gestion Foire et Salon','Préparation ,Organisation et gestion activités Trade Marketing','Préparation , Organisation et gestion Conférences de Presse']},
    
  ]
  return (
    <Box  sx={{marginY:'100px'}}>
        <Typography data-aos="fade-down" variant='h3' sx={titelstyle} fontFamily='Titre' >Services</Typography>

        <Typography data-aos="fade-down" variant='h4' color='var(--eminence)' fontFamily='Sous-titre'>POLE CRÉA & CONSEIL</Typography>
        <Typography   fontFamily='Text' textAlign='justify'>Meta Pixel c'est toutes les compétences d'une agence de communication globale 
          l'expertise technologique en plus
          </Typography>
<Typography   fontFamily='Text' textAlign='justify'>Le pôle CRÉA & CONSEIL constitue une véritable agence de communication 360° au sein de notre structure globale
 une véritable  mosaïque  de conseillers , d'experts et de créatifs passionnés , une équipe polyvalente aux expertises complémentaires avec une forte culture numérique.<br></br>
Nous agissons sur tous les niveaux de la communication :  stratégique , créative et opérationnelle.<br></br>
une approche globale adaptée aux nouveaux usages numériques qui donnera de la cohérence et de la force à vos prises de paroles et actions , qu'elles soient marketing ou institutionnelles .<br></br>
Nos équipes d'experts vous accompagnent en amont  dans l'analyse et la définition de vos besoins en fonction de votre secteur d'activité et vos objectifs business, des équipes dédiées à votre compte  qui veilleront à la réussite de vos projets de communication de la réflexion à l'exécution finale.

</Typography>
        
        <Grid  data-aos="fade-up" container spacing={2}>
        {tecnoItem.map((item, index) => (
        <Grid item xs={12} md={6}>
            <Paper elevation={3}  sx={paperStyle}>
              <Box sx={boxstyle}>
              {item.image.map((subItem, subIndex) => (
                      <Image
                src={`/CONSEIL image/${subItem}.png`}
                alt="Description of the image"
                width={50}
                height={50} 
                objectFit='contain'
                
              />
              ))}
              </Box>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>{item.discription}</Typography>
            {item.item.map((subItem, subIndex) => (
            <Typography  fontFamily='Text' key={subIndex} textAlign='left' ><ArrowForwardIosIcon fontSize='small'/>{subItem}</Typography>
            ))}
            </Paper>
            
        </Grid>
         ))}
        
        </Grid>

    </Box>
  )
}
