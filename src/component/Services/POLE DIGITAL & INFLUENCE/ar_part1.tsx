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

export default function Ar_part1() {


  const tecnoItem = [
    {image:['Picture1','Picture2','Picture3','Picture4'],discription:"Stratégie Digitale",item:['Audit Digital','Benchmark concurrentiel' ,'Recommandation stratégique','Définition de positionnement', 'Pilotage & analyse de la performance' ,'E-reputation','Influence Digitale  & Medias Electroniques' ]},
    {image:['Picture5','Picture6','Picture7','Picture8'],discription:"Web Development & Web Design",item:['Direction artistique & Charte Graphique Web ','Vidéo & Motion design 3D','Sites Internet & Plateforme e-commerce','Refonte Site Web','Blogs','Intranet - Extranet','Applications mobiles']},
    {image:['Picture9','Picture10','Picture11','Picture12'],discription:"Création de Contenu , Référencement SEA & SEO",item:['Inbound marketing ','Brand Content','Netlinking','Contenu Editoriale Web et Storytelling ','Référencement et Social Ads payants']},
    {image:['Picture13','Picture14','Picture15','Picture16'],discription:"Gestion des Réseaux Sociaux",item:['Analyse des Réseaux Sociaux ',' Stratégie social média','Création et Gestion des comptes RS ','Animation, modération des communautés ','Reporting & Monitoting ','Création d’une politique sur les médias sociaux ','Marketing Influence ','Mise en place du planning éditorial']},
    
  ]
  return (
    <Box  sx={{marginY:'100px'}}>
        <Typography data-aos="fade-down" variant='h3' sx={titelstyle} fontFamily='Titre' >Services</Typography>

        <Typography data-aos="fade-down" variant='h4' color='var(--eminence)' fontFamily='Sous-titre'>POLE DIGITAL & INFLUENCE</Typography>
        <Typography   fontFamily='Text' textAlign='justify'>Le Digital est au cœur de notre réflexion stratégique.</Typography>
        <Typography   fontFamily='Text' textAlign='justify'>Nous définissons votre stratégie Digitale et Web, en amont selon votre secteur d'activité , vos objectifs business et vos orientations Corporate .<br></br>
 Nous vous accompagnons durant toutes les phases de son exécution, de la phase audit et analyse à la phase développement et déploiement  .<br></br>
Nous vous fournissons l'expertise et  les outils technologiques nécessaires pour optimiser vos investissements digitaux et maximiser leur impact.<br></br>

Nous mettons aussi à votre disposition un écosystème d'influence digital et médias électroniques pour promouvoir votre marque, vos produits et protéger votre E-réputation.<br></br>

<Typography   fontFamily='Sous-titre' variant='h6'   textAlign='center'>Notre expertise digitale est transversale et globale.</Typography>
<Typography   fontFamily='Sous-titre' variant='h6'   textAlign='center'>Nous la mettons à votre service. </Typography>
</Typography>
        
        <Grid  data-aos="fade-up" container spacing={2}>
        {tecnoItem.map((item, index) => (
        <Grid item xs={12} md={6}>
            <Paper elevation={3}  sx={paperStyle}>
              <Box sx={boxstyle}>
              {item.image.map((subItem, subIndex) => (
                      <Image
                src={`/DIGITAL/${subItem}.png`}
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
