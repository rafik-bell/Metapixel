import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container, Grid, Modal, Paper, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
const bottonstyle ={
    border:'2px solid black',
    color:"black",
    fontWeight:550,
    padding:'10px 30px',
    marginY:'30px',
    fontFamily:'Sous-titre'


}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:'60%',md:500},
    bgcolor:'var(--Bright_Gray)',
    border: '5px solid var(--eminence)',
    boxShadow: 24,
    p:'40px',
    borderRadius:'30px',
    display: 'flex', 
    flexDirection:'column',
  };
const paperStyle = {
  padding: '30px',
  
  height:'220px',
  
  
  transition: 'box-shadow 0.3s', // Add a smooth transition for the box-shadow
  '&:hover': {
    boxShadow: '0 4px 8px var(--eminence)',
  },
};
const boxstyle={
    padding: '30px',
  justifyContent: 'center',
  display: 'flex', 
  alignItems: 'center',
  flexDirection:'column',
  my:'30px',
  height:'200px',
  borderRadius:'30%',
  transition: 'box-shadow 0.3s', // Add a smooth transition for the box-shadow
  boxShadow: '0 2px 4px var(--eminence)',
  '&:hover': {
    transform:' scale(1.1,1.1)',
    boxShadow: '10px 10px 20px var(--eminence)',
    
  },
 
}
const boxstyleg={
    justifyContent: 'center',
    display: 'flex', 
    alignItems: 'center',
    flexDirection:{xs:'column',md:"row"},
  };



export default function Homepart6() {
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
    {image:'Picture1',discription:"Notre vision",item:['Nous aspirons à être un acteur majeur dans le processus de transformation numérique en Algérie ','en accompagnant activement la transition Digitale des entreprises algériennes']},
    {image:'Picture2',discription:"Notre mission",item:["Nous nous engageons à offrir à nos partenaires les outils technologiques , l'expertise et l'accompagnement nécessaires  à la réussite de leur transformation numérique "]},
    {image:'Picture3',discription:"NOS VALEURS",item:["INNOVATION","AGILITÉ","PROXIMITE",'ENGAGEMENT',"TRANSPARENCE"]},
    
  ]
  return (
    <Container sx={{mb:"80px" ,minHeight:'85vh'}}>
       <Box sx={{marginY:'30px',textAlign:'center'}}>
        <Typography data-aos="fade-down"  color='var(--eminence)' variant='h3' fontFamily='Titre' >NOTRE PHILOSOPHIE</Typography>
       
          </Box>
        <Grid sx={boxstyleg} data-aos="fade-up" container spacing={3}>
        {tecnoItem.map((item, index) => (
  <Grid item xs={12} md={4} >
    <Box sx={{width:'300px',marginY:'40px'}}>
    
    <Paper elevation={3} sx={boxstyle}>
    <Button sx={{minWidth:'300px',minHeight:'250px', padding: '30px',borderRadius:'30%', display: 'flex',flexDirection:'column',}} onClick={() => handleOpen1(item.item,item.discription)}>
    <Image
        src={`/homeimage/${item.image}.png`}
        alt="Description of the image"
        width={50}
        height={50} 
        objectFit='contain'
      />
       <Typography  variant='h5' color='var(--eminence)' fontFamily='Titre'>{item.discription}</Typography>
       </Button>
       </Paper>
    </Box>
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
     
    </Container>
 
  )
}