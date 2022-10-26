import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'

import Cake from "../images/to5.jpg"
import Cake2 from "../images/to6.jpg"
import {  makeStyles } from '@mui/styles';
const useStyles = makeStyles ({
  typo: {
      
      color: 'grey',
      textAlign:'center', 
      margin:18,
      padding:35,
      fontSize:20
  },
})
const Aranzmani = () => {
  const classes = useStyles();
  return (
    
    <Box sx={{pt:{md:15, xs:5, sm:15, lg:15}, pb:20, paddingLeft:-3,  m:{md:20}}}>
    <Grid  container  spacing={2} direction="row" justify="center" alignItems="center">
      <Grid item xs={12} lg={6} sm={12} md={6}>
        <Grid container   direction="row" justify="center" alignItems="center" alignContent="center" style={{minHeight:"20rem"}} >
            <Grid item xs={12} lg={6} sm={12} md={6}>
              <Typography className={classes.typo} >Nekoliko godina iskustva na izradi raznih aranzmana</Typography>
            </Grid>
            <Grid item xs={12} lg={6} sm={12} md={6} >
           
                <img className='img2' src={Cake}   />
             
            </Grid>
        </Grid>
      </Grid>
      <Grid   item xs={12} lg={6} sm={12} md={6}>
        <Grid container direction="row" justify="center" alignItems="center" alignContent="center" style={{minHeight:"200px"}} >
            <Grid item xs={12} lg={6} sm={12} md={6}>
              <Typography className={classes.typo} >Aranzmani za sve prilike- dekoracije za dom, groblja, bozicni vjenci</Typography>
            </Grid>
            <Grid item xs={12} lg={6} sm={12} md={6}>
           
                <img className='img2' src={Cake2}  />
             
            </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Aranzmani