import Head from 'next/head'
import Image from 'next/image'
import { AppBar, Box, Button, IconButton, Toolbar, Typography ,Link, Menu, MenuItem } from '@mui/material'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationIcon from '@mui/icons-material/Navigation';
const linkStyles = {
  color:'black' ,
  mr: 3,
  fontSize: 18,
  textDecoration:'none',
  fontWeight: 600,

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

  '&:hover': {
    textDecoration: 'none',
    color :'#ffa726',
    
    
},
};
const linkStyles_in_menu = {
  color:'black' ,
  fontSize: 18 ,
  margin:'5px',
  textDecoration:'none',
  '&:hover': {
    textDecoration:'none',
    color :'#ffa726',
    
    
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
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick1 = (event:any) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClick2 = (event:any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar  sx={{ bgcolor:'white'}}>
      <Toolbar sx={{ position:'sticky', justifyContent: 'space-between' ,marginY:'10px'}}>
      <Image
        src="/logo.png" 
        alt="Description of the image"
        width={170}
        height={100} 
      />
        
        <Box sx={{display:{lg:'flex' , md :'none' ,xs :'none'}, flexDirection:'row', alignItems :'center' ,marginX:'2%' }}>
        <Link href='\' sx={linkStyles}><Typography sx={linkStylesT}>Home</Typography></Link>
        <Link href='\' sx={linkStyles}><Typography sx={linkStylesT}>About Us</Typography></Link>
        <Typography  onClick={handleClick1} sx={linkStyles}>Marketing</Typography>
        <Link href='\'  sx={linkStyles}><Typography sx={linkStylesT}>Branding</Typography></Link>
        <Typography  onClick={handleClick2} sx={linkStyles}>Development</Typography>

        <Button variant='contained' sx={{bgcolor:'#ffa726' }}>contact<NavigationIcon></NavigationIcon></Button>
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
        <MenuItem onClick={handleClose}><Link href='\' sx={linkStyles_in_menu}>About Us</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='\'  sx={linkStyles_in_menu}>Marketing</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='\'  sx={linkStyles_in_menu}>Branding</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='\'  sx={linkStyles_in_menu}>Development</Link></MenuItem>

        <Button variant='contained' sx={{bgcolor:'#ffa726'}}>Login<NavigationIcon></NavigationIcon></Button>
      </Menu>


















      
     
      <Menu
        anchorEl={anchorEl1}
        open={Boolean(anchorEl1)}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button-1',
        }}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
      <Menu
        anchorEl={anchorEl2}
        open={Boolean(anchorEl2)}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button-2',
        }}
      >
        <MenuItem onClick={handleClose}>Item 1</MenuItem>
        <MenuItem onClick={handleClose}>Item 2</MenuItem>
        <MenuItem onClick={handleClose}>Item 3</MenuItem>
      </Menu>
  </Box>
 
  )
}