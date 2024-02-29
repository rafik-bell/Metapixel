import Head from 'next/head'
import Image from 'next/image'
import { AppBar, Box, Button, IconButton, Toolbar, Typography ,Link, Menu, MenuItem } from '@mui/material'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationIcon from '@mui/icons-material/Navigation';

const linkStyles = {
  color:'var(--eminence)' ,
  mr: 3,
  fontSize: 18,
  textDecoration:'none',
  fontWeight: 600,
  fontFamily:"Sous-titre",
  '&:hover': {
    textDecoration: 'none',
   
    
    
},


};
const linkStylesT = {
  color:'var(--eminence)',
  
  fontSize: 18,
  textDecoration:'none',
  fontWeight: 600,
  fontFamily:"Sous-titre",

  '&:hover': {
    textDecoration: 'none',
   
    
    
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
    <AppBar  sx={{ bgcolor:'var(--Bright_Gray)'}}>
      <Toolbar sx={{  position:'sticky', justifyContent: 'space-between', alignItems:'center' ,marginTop:'10px'}}>
      <Image
        src="/Black on white AI.png" 
        alt="Description of the image"
        width={170}
        height={48} 
      />
        
        <Box sx={{display:{lg:'flex' , md :'none' ,xs :'none'}, flexDirection:'row', alignItems :'center' ,marginX:'2%' }}>
        <Link href="/#section1" sx={linkStyles}><Typography sx={linkStylesT}>Qui sommes-nous</Typography></Link>
        <Link href='/#section2' sx={linkStyles}><Typography sx={linkStylesT}>Expertise</Typography></Link>
        <Link href='/#section3' sx={linkStyles}><Typography sx={linkStylesT}>Philosophie</Typography></Link>
        
        
        

        <Button variant='contained' href='/#section4' sx={{color:'var(--eminence)',fontSize: 15,fontWeight: 600,bgcolor:'var(--Bright_Gray)', '&:hover': {bgcolor:'var(--eminence)',color :'var(--Bright_Gray)',}, }}>Contactez-nous<NavigationIcon></NavigationIcon></Button>
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
          style: { display: 'flex', flexDirection: 'column', alignItems: 'center',padding:'5px' },
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link href="/#section1" sx={linkStyles_in_menu}>Qui sommes-nous</Link></MenuItem>
        {/* <MenuItem ><Typography onClick={handleClick1}  sx={linkStyles_in_menu}>Expertise</Typography></MenuItem> */}
        <MenuItem onClick={handleClose}><Link href="/#section2" sx={linkStyles_in_menu}>Expertise</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/#section3" sx={linkStyles_in_menu}>Philosophie</Link></MenuItem>
        

        <Button variant='contained' href='/#section4' sx={{color:'var(--eminence)',fontSize: 15,fontWeight: 600,bgcolor:'var(--Bright_Gray)', '&:hover': {bgcolor:'var(--eminence)',color :'var(--Bright_Gray)',}, }}>Contactez-nous<NavigationIcon></NavigationIcon></Button>
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