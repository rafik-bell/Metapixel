import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import Picture1 from '../../assets/image/homeimage/Picture4.jpeg'
import Picture2 from '../../assets/image/homeimage/Picture5.jpeg'
import Picture3 from '../../assets/image/homeimage/Picture6.jpeg'




 

const bottonstyle = {
  border: "2px solid black",
  color: "black",
  fontWeight: 550,
  padding: "10px 30px",
  marginY: "30px",
  fontFamily: "Sous-titre",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "60%", md: 500 },
  bgcolor: "var(--Bright_Gray)",
  border: "5px solid var(--eminence)",
  boxShadow: 24,
  p: "40px",
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
};
const paperStyle = {
  padding: "30px",

  height: "220px",

  transition: "box-shadow 0.3s", // Add a smooth transition for the box-shadow
  "&:hover": {
    boxShadow: "0 4px 8px var(--eminence)",
  },
};
const boxstyle = {
  
  padding: "30px",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  my: "30px",
  height: "150px",
  width: "150px",
  borderRadius: "45%",
  transition: "box-shadow 0.3s", // Add a smooth transition for the box-shadow
  boxShadow: "0 2px 4px var(--eminence)",
  "&:hover": {
    transform: " scale(1.1,1.1)",
    boxShadow: "10px 10px 20px var(--eminence)",
  },
};
const boxstyleg = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: { xs: "column", md: "row" },
};

export default function Homepart6() {
 
  const tecnoItem = [
    {
      image: Picture1,
      discription: "Notre vision",
      item: [
        "Nous aspirons à être un acteur majeur dans le processus de transformation numérique en Algérie ",
        "en accompagnant activement la transition Digitale des entreprises algériennes",
      ],
    },
    {
      image: Picture2,
      discription: "Notre mission",
      item: [
        "Nous nous engageons à offrir à nos partenaires les outils technologiques ,l'expertise et l'accompagnement nécessaires  à la réussite de leur transformation numérique ",
      ],
    },
    {
      image: Picture3,
      discription: "Nos Valeurs",
      item: [
        "TRANSPARENCE",
        "ENGAGEMENT",
        "INNOVATION",
        "PROXIMITE",
        
        
        "AGILITÉ",
      ],
    },
  ];


  return (
    <Container sx={{ minHeight: "90vh" }}>
      <Box sx={{ marginY: "20px", textAlign: "center" }}>
        <Typography
          data-aos="fade-down"
          color="var( --Bright_Gray)"
          variant="h4"
          fontFamily="Titre"
        >
          NOTRE PHILOSOPHIE
        </Typography>
      </Box>
      <Grid sx={boxstyleg} data-aos="fade-up" container spacing={3}>
        {tecnoItem.map((item, index) => (
          <Grid item xs={12} md={3.4} sx={{ mx: "20px" }}>
            <Box
              sx={{
               
                width: "300px",
                marginY: "40px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Paper
                elevation={3}
                sx= {{ ...boxstyle, ...{ 
                backgroundImage: `url(${item.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              border:'3px solid var( --Bright_Gray) ' } }}
               
              >
               
              </Paper>
              <Typography
                textAlign="center"
                my={"20px"}
                variant="h4"
                color="var( --Bright_Gray)"
                fontFamily="Titre"
              >
                {item.discription}
              </Typography>
              {item.item.map((item, index) => (
              <Typography
                textAlign='justify'
                color="var( --Bright_Gray)"
                fontFamily="Text"
              >
               - {item}
              </Typography>
               ))}
            </Box>
          </Grid>
        ))}

       
      </Grid>
     

      
    </Container>
  );
}
