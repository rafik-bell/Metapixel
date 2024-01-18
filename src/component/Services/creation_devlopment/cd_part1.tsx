import { Box, Grid, Paper, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react'
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
  

export default function Cd_part1() {
  return (
    <Box  sx={{marginY:'100px'}}>
        <Typography data-aos="fade-down" variant='h3' sx={titelstyle} fontFamily='Titre' >Services</Typography>

        <Typography data-aos="fade-down" variant='h4' color='var(--eminence)' fontFamily='Sous-titre'>CREATION & DEVELOPPEMENT</Typography>
        <Typography   fontFamily='Text' textAlign='justify'>Meta Pixel's "CREATION & DEVELOPMENT" services combine innovative design and robust development to bring your digital vision to life. We specialize in crafting engaging and user-centric solutions, leveraging cutting-edge technologies. From conceptualization to execution, our team ensures a seamless development process, emphasizing creativity, functionality, and scalability. Whether it's web applications, mobile apps, or bespoke software, we tailor solutions to meet your unique business needs. Trust Meta Pixel to transform your ideas into impactful digital experiences, driving growth and success in the ever-evolving digital landscape.</Typography>
        <Typography  variant='h4' sx={titelstyle} fontFamily='Titre' >CREATION</Typography>
        <Grid  data-aos="fade-up" container spacing={2}>
        <Grid item xs={12} md={4}>
            <Paper elevation={3}  sx={paperStyle}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>CREATION DE CHOSE 1</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            </Paper>
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper sx={paperStyle}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>CREATION DE CHOSE 2</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            </Paper>
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper sx={{padding:'30px',my:"30px"}}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>CREATION DE CHOSE 3</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CREATION DE CHOSE</Typography>
            </Paper>
        
        </Grid>
        </Grid>
        <Typography  variant='h4' sx={titelstyle} fontFamily='Titre' >DEVELOPMENT</Typography>
        <Grid  data-aos="fade-up" container spacing={2}>
        <Grid item xs={12} md={4}>
            <Paper elevation={3}  sx={paperStyle}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>DEVELOPMENT DE WEB</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>DEVELOPMENT DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>DEVELOPMENT DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>DEVELOPMENT DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>DEVELOPMENT </Typography>
            </Paper>
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper sx={paperStyle}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>CREATION DE MOBILE APP</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>DEVELOPMENT DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>DEVELOPMENT DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>DEVELOPMENT DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>DEVELOPMENT DE CHOSE</Typography>
            </Paper>
            
        </Grid>
        </Grid>

    </Box>
  )
}
