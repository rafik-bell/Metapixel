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

export default function Ar_part1() {
  return (
    <Box  sx={{marginY:'100px'}}>
        <Typography data-aos="fade-down" variant='h3' sx={titelstyle} fontFamily='Titre' >Services</Typography>

        <Typography data-aos="fade-down" variant='h4' color='var(--eminence)' fontFamily='Sous-titre'>POLE DIGITAL & INFLUENCE</Typography>
        <Typography   fontFamily='Text' textAlign='justify'>Meta Pixel's "ANALYSE & REPORTING" services offer in-depth insights into your digital presence. We employ advanced analytics tools to dissect data, providing a clear understanding of user behavior, market trends, and performance metrics. Our strategic reporting enables informed decision-making, empowering you to optimize strategies for maximum impact. From comprehensive analytics to actionable reports, we help you stay ahead in the dynamic digital landscape. Trust Meta Pixel to unravel the intricacies of your online performance, guiding you towards data-driven decisions that enhance your digital footprint and contribute to sustained growth.</Typography>
        <Typography  variant='h4' sx={titelstyle} fontFamily='Titre' >ANALYSE</Typography>
        <Grid  data-aos="fade-up" container spacing={2}>
        <Grid item xs={12} md={4}>
            <Paper elevation={3}  sx={paperStyle}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>CREANALYSE CHOSE 1</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE & GESTION</Typography>
            </Paper>
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper sx={paperStyle}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>ANALYSE DE CHOSE 2</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            </Paper>
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper sx={{padding:'30px',my:"30px"}}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>ANALYSE DE CHOSE 3</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>ANALYSE DE CHOSE</Typography>
            </Paper>
        
        </Grid>
        </Grid>
        <Typography  variant='h4' sx={titelstyle} fontFamily='Titre' >REPORTING</Typography>
        <Grid  data-aos="fade-up" container spacing={2}>
        <Grid item xs={12} md={4}>
            <Paper elevation={3}  sx={paperStyle}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>REPORTING</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>REPORTING DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>REPORTING DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>REPORTING DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>REPORTING </Typography>
            </Paper>
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper sx={paperStyle}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>REPORTING</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>REPORTING DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>REPORTING DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>REPORTING DE CHOSE</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>REPORTING DE CHOSE</Typography>
            </Paper>
            
        </Grid>
        </Grid>

    </Box>
  )
}
