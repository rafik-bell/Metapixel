import Head from 'next/head'
import Image from 'next/image'
import { AppBar, Box, Button, IconButton, Toolbar, Typography ,Link, Menu, MenuItem } from '@mui/material'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationIcon from '@mui/icons-material/Navigation';
import styles from '@/styles/Navbar.module.css'
const linkStyles = {
  color:'black' ,
  mr: 3,
  fontSize: 18,
  textDecoration:'none',
  fontWeight: 600,
  fontFamily:"Sous-titre",
  '&:hover': {
    textDecoration: 'none',
    color :'#ffa726',
    
    
},


};
const linkStylesT = {
  color:'black' ,
  
  fontSize: 18,
  textDecoration:'none',
  fontWeight: 600,
  fontFamily:"Sous-titre",

  '&:hover': {
    textDecoration: 'none',
    color :'var(--Bright_Gray)',
    
    
},
};
const linkStyles_in_menu = {
  color:'black' ,
  fontSize: 18 ,
  margin:'5px',
  textDecoration:'none',
  fontFamily:"Sous-titre",
  '&:hover': {
    textDecoration:'none',
    color :'var(--Dark_Charcoal)',
    
    
},

};

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const [anchorEl1, setAnchorEl1] = useState(null);
 

  const handleClick1 = (event:any) => {
    setAnchorEl1(event.currentTarget);
  };


  const handleClose1 = () => {
    setAnchorEl1(null);
    
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar  sx={{ bgcolor:'white'}}>
      <Toolbar sx={{  position:'sticky', justifyContent: 'space-between', alignItems:'center' ,marginTop:'10px'}}>
      <Image
        src="/Black on white AI.png" 
        alt="Description of the image"
        width={170}
        height={48} 
      />
        
        <Box sx={{display:{lg:'flex' , md :'none' ,xs :'none'}, flexDirection:'row', alignItems :'center' ,marginX:'2%' }}>
        <Link href='\' sx={linkStyles}><Typography sx={linkStylesT}>Home</Typography></Link>
        <Typography  onClick={handleClick1} sx={linkStyles}>Services</Typography>
        <Link href='\Success_story' sx={linkStyles}><Typography sx={linkStylesT}>Success story </Typography></Link>
        
        
        

        <Button variant='contained' href='/Login' sx={{bgcolor:'var(--eminence)' }}>Join us<NavigationIcon></NavigationIcon></Button>
        </Box>




        <Box sx={{display:{lg:'none'}}}>

        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" ></MenuIcon>
      </Button>
       
        
        </Box>

   
      </Toolbar>
    </AppBar>
     <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          style: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link href='\' sx={linkStyles_in_menu}>Home</Link></MenuItem>
        <MenuItem ><Typography onClick={handleClick1}  sx={linkStyles_in_menu}>Services</Typography></MenuItem>
        <MenuItem onClick={handleClose}><Link href='\Success_story' sx={linkStyles_in_menu}>Success story </Link></MenuItem>
        

        <Button variant='contained' href='/Login' sx={{bgcolor:'var(--eminence)' }}>Join us<NavigationIcon></NavigationIcon></Button>
      </Menu>


















      
     
      <Menu
        anchorEl={anchorEl1}
        open={Boolean(anchorEl1)}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button-1',
        }}
      >
        <MenuItem onClick={handleClose}><Link onClick={handleClose1}  sx={linkStyles_in_menu} href='\POLE_TECHNOLOGY'>POLE TECHNOLOGY</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link  onClick={handleClose1}  sx={linkStyles_in_menu} href='\POLE_CREA_&_CONSEIL'>POLE CRÉA & CONSEIL</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link  onClick={handleClose1}  sx={linkStyles_in_menu} href='\POLE_DIGITAL_&_INFLUENCE'>POLE DIGITAL & INFLUENCE</Link></MenuItem>
      </Menu>
      
  </Box>
 
  )
}