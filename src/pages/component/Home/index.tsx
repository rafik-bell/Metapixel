import Head from 'next/head'
import Image from 'next/image'
import { Box, Grid, Typography, createTheme } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Homepart0 from './Homepart0';
import Homepart1 from './Homepart1';
import Homepart2 from './Homepart2';
const styleimage ={
  opacity :'50%'
}



export default function Homepqge() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
      // Add more configuration options as needed
    });
  }, []);
  return (
    <Box>
      <Homepart0></Homepart0>
      <Homepart1></Homepart1>
      <Homepart2></Homepart2>
      <Typography >ggggggggggg</Typography>
   
    </Box>
  )
}