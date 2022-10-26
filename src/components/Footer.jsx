import React from 'react'

import Box from '@mui/material/Box'

import { Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
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
    paddingTop:30,
   
  }
});
const Footer = () => {
  const classes = useStyles();
  
  return (
<Box className={classes.root}>
   <Typography variant="h5" className={classes.typos}>Martina Dekoracije I Torte</Typography>
   <Typography variant="h5"lassName={classes.typos}>Email: m5m.erceg@gmail.com</Typography>
   <Typography variant="h5" lassName={classes.typos}>Mob: 0918910137</Typography>
    </Box>
      
    
  )
}

export default Footer