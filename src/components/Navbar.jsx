import React, { useState } from 'react'
import {  makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CssBaseline from "@mui/material/CssBaseline"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
  import {Link} from "react-router-dom"
  import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
const drawerWidth = 240;
//const navItems = ['Home', 'Torte',  "Aranzmani", 'Kontakt'];
 
  const useStyles = makeStyles ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        
        
    },
    navlinks: {
        marginLeft: "630px",
        display: "flex",
      },
      navlinks2: {
        textDecoration:"none",
        color:"grey"
      },
      logo: {
        flexGrow: "1",
        cursor: "pointer",
        
      },
      link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: "30px",
        "&:hover": {
          color: "grey",
          borderBottom: "1px solid grey",
        },
      },
  });
  

const Navbar = (props) => {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
    const classes = useStyles(); 
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
       
        <Typography variant="h6" sx={{ my: 2}}>
          
        <Link to="/" >
        Martina Dekoracije I Torte
        </Link>
        </Typography>
       
       
        <Divider />
        <List>
        <ListItem  >
        <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText>
              <Link to="/" 
              className={classes.navlinks2}
            >Home</Link>
             
            </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => setMobileOpen(false)}>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText>
              <Link to="/torte"
               className={classes.navlinks2}
              >Torte</Link>
            </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => setMobileOpen(false)}>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText>
              <Link to="/aranzmani"
               className={classes.navlinks2}
              >Aranzmani</Link>
            </ListItemText>
            </ListItemButton>
          </ListItem>
         
          
          {/* {navItems.map((item) => (
            <>
            
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} >
                
                </ListItemText>
              </ListItemButton>
            </ListItem>
            </>
          ))} */}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
   
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/" className={classes.link}>
            Martina Dekoracije I Torte
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            <div className={classes.navlinks}>
             <Link to="/" className={classes.link}>
               Home
            </Link>
            <Link to="/aranzmani" className={classes.link}>
              Aranzmani
             </Link>
             <Link to="/torte" className={classes.link}>
               Torte
             </Link>
             
            
           
           </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none'  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </Box>
//    <>
       
//         <AppBar sx={{height: {lg:"90px", xs:"80px", md:"90px", sm:"80px"},
//         width:"100%",
//         paddingTop:1.2}} position="static" style={{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}>
//             <CssBaseline />
//             <Toolbar>
//             <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//            // onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
// <Typography variant="h4"
//   sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
// className={classes.logo}
// >
//     Martina Dekoracije I Torte
// </Typography>

// <div className={classes.navlinks}>
//             <Link to="/" className={classes.link}>
//               Home
//             </Link>
//             <Link to="/aranzmani" className={classes.link}>
//               Aranzmani
//             </Link>
//             <Link to="/torte" className={classes.link}>
//               Torte
//             </Link>
//             <Link to="/kontakt" className={classes.link}>
//               Kontakt
//             </Link>
            
           
//           </div>
          
//             </Toolbar>
            
//         </AppBar>
     
      
//    </>
  )
}
Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: Navbar.func,
};


export default Navbar