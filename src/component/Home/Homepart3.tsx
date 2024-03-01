import { useState } from 'react';
import { Box, Button, Container, Grid, Link, Modal, Paper, Typography } from '@mui/material';
const linkStyles = {
  color:'var(--eminence)' ,
  mr: 3,
  fontSize: 20,
  textDecoration:'none',
  fontWeight: 800,
  fontFamily:"Sous-titre",
  '&:hover': {
    textDecoration: 'none',
   
    
    
},
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  textAlign :'center',
  justifyContent: 'center',
  display: 'flex', 
  alignItems: 'center',
  flexDirection:'column',
};

const bottonstyle ={
  border:'2px solid black',
  color:"black",
  fontWeight:550,
  padding:'10px 30px',
  marginY:'30px',
  fontFamily:'Sous-titre'
};

const paperStyle = {
  padding: '30px',
  borderRadius:'30%',
  
  justifyContent: 'center',
  display: 'flex', 
  alignItems: 'center',
  bgcolor:'white',
  height:'220px',
  transition: 'box-shadow 0.3s',
  '&:hover': {
    transform:' scale(1.1,1.1)',
    boxShadow: '0px 4px 8px var(--Bright_Gray)',
  },
};

const boxstyle={
  justifyContent: 'center',
  display: 'flex', 
  alignItems: 'center',
  flexDirection:{xs:'column',md:"row"},
};

export default function Homepart3() {
  const [open, setOpen] = useState(false);
  const [obj, setObj] = useState<string | undefined>(); // Adjusting the type of obj

  const handleOpen1 = (index: string) => {
    setOpen(true);
    setObj(index);
  };

  const handleClose = () => setOpen(false);

  const tecnoItem = [
    {discription:"Pôle Technolgy",link:'\POLE_TECHNOLOGY'},
    {discription:"Pôle Créa & Conseil",link:'\POLE_CREA_&_CONSEIL'},
    {discription:"Pôle Digital & Influence",link:'\POLE_DIGITAL_&_INFLUENCE'}
  ];

  return (
    <Box sx={{backgroundImage: "url('/650 350.png')",backgroundSize: 'cover',backgroundPosition: 'center',minHeight:'90vh', paddingX:"20px"}}>
      <Box sx={{marginY:'10px',textAlign:{xs:'left',md:'center'}}}>
        <Typography data-aos="fade-down" color='var(--Bright_Gray)' variant='h5' fontFamily='Titre' >NOS DOMAINES D'EXPERTISE</Typography>
        <Typography variant='h6' color='var(--Bright_Gray)' fontFamily='Text'>Meta Pixel c'est l’alliance entre technologie , créativité et savoir-faire, nous mettons toute notre expertise , en transformation digitale notamment, au service de la croissance et du développement pérenne de nos partenaires</Typography>
        <Typography variant='h6' color='var(--Bright_Gray)'  fontFamily='Titre'>Meta Pixel c'est trois pôles d'expertise qui travaillent en synergie pour vous </Typography>
      </Box>
      <Grid  data-aos="fade-up" sx={boxstyle} container spacing={3}>
        {tecnoItem.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Box sx={{width:'300px',marginY:'40px'}}>
              <Button onClick={() => handleOpen1(item.link)}> {/* Use an arrow function here */}
                <Paper elevation={24}  sx={paperStyle}>
                  <Typography variant='h5' sx={{color:'var(--black)'}} fontFamily='Sous-titre' textAlign='center'>{item.discription}</Typography>
                </Paper>
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ width: '80%', mb: 1 }}>
          Nous définissons votre stratégie digitale et web, en amont selon
          </Typography>
          <Link href={`/${obj}`} sx={linkStyles}>Lire Plus</Link>
        </Box>
      </Modal>
    </Box>
  )
}
