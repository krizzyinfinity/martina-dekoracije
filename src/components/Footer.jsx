import React from 'react'

import Box from '@mui/material/Box'

import { Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const useStyles = makeStyles({
  root: {
    backgroundColor: "grey",
   
    textAlign:"center",
    maxWidth: "100vw",
    minHeight: 150,
    marginLeft: "auto",
    marginRight: "auto",
    color:"antiquewhite",
   
  },
  typos: {
    paddingTop:20,
    
   
  }
});
const theme = createTheme();

theme.typography.h6 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.7rem',
  },
};
const Footer = () => {
  const classes = useStyles();
  
  return (
<Box className={classes.root}>
<ThemeProvider theme={theme}>
   <Typography variant="h6" className={classes.typos}>Martina Dekoracije I Torte</Typography>
   <Typography variant="h6"lassName={classes.typos}>Email: m5m.erceg@gmail.com</Typography>
   <Typography variant="h6" lassName={classes.typos}>Mob: 0918910137</Typography>
    </ThemeProvider>
    </Box>
      
    
  )
}

export default Footer