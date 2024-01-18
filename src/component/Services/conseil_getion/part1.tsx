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
  

export default function Part1() {
  return (
    <Box  sx={{marginY:'100px'}}>
        <Typography data-aos="fade-down" variant='h3' sx={titelstyle} fontFamily='Titre' >Services</Typography>

        <Typography data-aos="fade-down" variant='h4' color='var(--eminence)' fontFamily='Sous-titre'>CONSEIL & GESTION</Typography>
        <Typography   fontFamily='Text' textAlign='justify'>"Meta Pixel's 'CONSEIL & GESTION' service provides strategic guidance and expert management for an optimized digital journey. Tailored to each unique business, we blend technological insight with strategic vision. Our services include strategic consulting, end-to-end project management, investment optimization, and customized training. We guide the development of a digital strategy aligned with your business goals, ensuring seamless project execution within deadlines and budgets. By continuously evaluating performance and providing ongoing support, we maximize the return on your digital investment. With Meta Pixel, 'CONSEIL & GESTION' is your trusted partner for a successful digital transformation, driving business objectives through strategic expertise."</Typography>
        <Grid  data-aos="fade-up" container spacing={2}>
        <Grid item xs={12} md={4}>
            <Paper elevation={3}  sx={paperStyle}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            </Paper>
            
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper sx={paperStyle}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            </Paper>
            
        </Grid><Grid item xs={12} md={4}>
            <Paper sx={{padding:'30px',my:"30px"}}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            </Paper>
            
        </Grid><Grid item xs={12} md={4}>
            <Paper sx={{padding:'30px',my:"30px"}}>
            <Typography variant='h5' color='var(--eminence)' fontFamily='Titre'>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            <Typography  fontFamily='Text' ><ArrowForwardIosIcon fontSize='small'/>CONSEIL & GESTION</Typography>
            </Paper>
            
        </Grid>
        
        </Grid>

    </Box>
  )
}
