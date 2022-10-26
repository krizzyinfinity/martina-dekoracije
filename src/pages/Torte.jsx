import { Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import Cake from "../images/cake.jfif"
import Cake2 from "../images/cake2.jfif"
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
const Torte = () => {
  const classes = useStyles();
  return (
    
    <Box sx={{pt:10, pb:10}}>
    <Grid  container  spacing={2} direction="row" justify="center" alignItems="center">
      <Grid item xs={12} lg={6} sm={12} md={6}>
        <Grid container   direction="row" justify="center" alignItems="center" alignContent="center" style={{minHeight:"20rem"}} >
            <Grid item xs={12} lg={6} sm={12} md={6}>
              <Typography className={classes.typo} >Posvetili smo se nasoj strasti izrade kolaca i torti
              i postali pravi profesionalci</Typography>
            </Grid>
            <Grid item xs={12} lg={6} sm={12} md={6} >
           
                <img className='img2' src={Cake}  color="white" />
             
            </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6} sm={12} md={6}>
        <Grid container direction="row" justify="center" alignItems="center" alignContent="center" style={{minHeight:"200px"}} >
            <Grid item xs={12} lg={6} sm={12} md={6}>
              <Typography className={classes.typo} >Bilo da se radi o rodjendanu, krstitkama ili obiteljskom slavlju, obratite nam se s povjerenjem</Typography>
            </Grid>
            <Grid item xs={12} lg={6} sm={12} md={6}>
           
                <img className='img2' src={Cake2}  color="white"/>
             
            </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Torte