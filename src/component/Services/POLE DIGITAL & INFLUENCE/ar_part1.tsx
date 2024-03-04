import { Box, Grid, Modal, Paper, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react'
import Image from 'next/image';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:'60%',md:500},
  bgcolor:'white',
  
  boxShadow: 24,
  p:'40px',
  borderRadius:'30px',
  display: 'flex', 
  flexDirection:'column',
};
const titelstyle = { 
    borderLeft:'10px solid var(--eminence)',
    paddingLeft:'15px',
    my:'10px',
    borderRadius:'15px'
  };
  const paperStyle = {
    padding: '30px',
    my: '30px',
    minHeight:'150px',
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
  const [open, setOpen] = useState(false);
  const [obj, setObj] = useState<string[] | undefined>(); // Adjusting the type of obj
  const [obj1, setObj1] = useState<string | undefined>(); // Adjusting the type of obj

  const handleOpen1 = (index: any,index1:string) => {
    setOpen(true);
    setObj(index);
    setObj1(index1);
  };

  const handleClose = () => setOpen(false);


  const tecnoItem = [
    {image:['Picture1','Picture2','Picture3','Picture4'],discription:"Stratégie Digitale",item:['Audit Digital','Benchmark concurrentiel' ,'Recommandation stratégique','Définition de positionnement', 'Pilotage & analyse de la performance' ,'E-reputation','Influence Digitale  & Medias Electroniques' ]},
    {image:['Picture5','Picture6','Picture7','Picture8'],discription:"Web Development & Web Design",item:['Direction artistique & Charte Graphique Web ','Vidéo & Motion design 3D','Sites Internet & Plateforme e-commerce','Refonte Site Web','Blogs','Intranet - Extranet','Applications mobiles']},
    {image:['Picture9','Picture10','Picture11','Picture12'],discription:"Création de Contenu , Référencement SEA & SEO",item:['Inbound marketing ','Brand Content','Netlinking','Contenu Editoriale Web et Storytelling ','Référencement et Social Ads payants']},
    {image:['Picture13','Picture14','Picture15','Picture16'],discription:"Gestion des Réseaux Sociaux",item:['Analyse des Réseaux Sociaux ',' Stratégie social média','Création et Gestion des comptes RS ','Animation, modération des communautés ','Reporting & Monitoting ','Création d’une politique sur les médias sociaux ','Marketing Influence ','Mise en place du planning éditorial']},
    
  ]
  return (
    <Box  sx={{ px:{xs:'10px',md:'0px'},marginY:'100px'}}>
        <Typography data-aos="fade-down" variant='h3' sx={titelstyle} fontFamily='Titre' >Services</Typography>

        <Typography data-aos="fade-down" variant='h4' color='var(--eminence)' fontFamily='Sous-titre'>POLE DIGITAL & INFLUENCE</Typography>
        <Typography   fontFamily='Sous-titre' variant='h6' mt='20px'   textAlign='center'>Notre expertise digitale est transversale et globale.</Typography>
<Typography   fontFamily='Sous-titre' variant='h6' mb='20px'  textAlign='center'>Nous la mettons à votre service. </Typography>
        <Typography   fontFamily='Text' textAlign='justify'>Nous définissons votre stratégie Digitale et Web, en amont selon votre secteur d'activité , vos objectifs business et vos orientations Corporate .<br></br>
 Nous vous accompagnons durant toutes les phases de son exécution, de la phase audit et analyse à la phase développement et déploiement  .<br></br>
Nous vous fournissons l'expertise et  les outils technologiques nécessaires pour optimiser vos investissements digitaux et maximiser leur impact.<br></br>

Nous mettons aussi à votre disposition un écosystème d'influence digital et médias électroniques pour promouvoir votre marque, vos produits et protéger votre E-réputation.<br></br>


</Typography>
        
        <Grid  data-aos="fade-up" container spacing={2}>
        {tecnoItem.map((item, index) => (
        <Grid item xs={12} md={6}>
            <Paper elevation={3}  sx={paperStyle} onClick={() => handleOpen1(item.item,item.discription)}>
              <Box sx={boxstyle}>
              {item.image.map((subItem, subIndex) => (
                      <Image
                src={`/DIGITAL/${subItem}.png`}
                alt="Description of the image"
                width={70}
                height={70} 
                objectFit='contain'
                
                
              />
              ))}
              </Box>
            <Typography mt='30px' textAlign='center' variant='h6' color='var(--eminence)' fontFamily='Titre'>{item.discription}</Typography>
            </Paper>
            {/* {item.item.map((subItem, subIndex) => (
            <Typography  fontFamily='Text' key={subIndex} textAlign='left' ><ArrowForwardIosIcon fontSize='small'/>{subItem}</Typography>
            ))} */}
            
            
        </Grid>
         ))}
        
       
        </Grid>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-aos="fade-down"
      >
        <Box  sx={style}>
            <Typography  variant='h5' color='var(--eminence)' fontFamily='Titre' textAlign='center'>{obj1}</Typography>
        {obj && obj.map((item, index) => (
          <Typography textAlign='justify' fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>{item}</Typography>
          ))}
        </Box>
      </Modal>
    </Box>
  )
}
