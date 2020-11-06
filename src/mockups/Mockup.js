import React, {useState} from 'react'
import ImageUpload from './ImageUpload'
import FileUpload from './FileUpload'
import './Mockup.css'
import Canvas from './Canvas'

import { Button, Divider, Typography, TextField, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    box : {
        margin: "0em",
        color : 'darkGreen',
        textAlign : 'left',
        fontFamily : 'lato'
      },

      heading : {
          marginTop : '3rem',
          marginBottom : '3rem',
          height : '500'
      },

      box3  : {
        display : 'flex' ,
        flexDirection : 'row' ,
        alignItems : 'center',
        textAlign : 'center',
        marginLeft : '12em'
      },
     
      box2 : {
        display : 'flex' ,
        flexDirection : 'row' ,
        alignItems : 'center',
        textAlign : 'center',
        marginLeft : '12em'
      },

      box4 : {
        display : 'flex' ,
        flexDirection : 'row' ,
        alignItems : 'center',
        textAlign : 'center',
        marginLeft : '12em'
      },

      box5 : {
        display : 'flex' ,
        flexDirection : 'row' ,
        alignItems : 'center',
        textAlign : 'center',
        marginLeft : '12em'
      },

      box6 : {
        display : 'flex' ,
        flexDirection : 'row' ,
        alignItems : 'center',
        textAlign : 'center',
        marginLeft : '12em'
      },

      lidarClock : {
          width : 300,
          height : 70,
        
         
      },

      textClock  : {
          font : 'bold',
          marginLeft : '7em'

      },
       shrink : {
        width : 600,
        height : 80,
           
       }

}));


function Mockup() {
    const classes = useStyles(); 
   

    return (
        <div>
    <Container fluid className = {classes.box}>
      <div className = {classes.heading}>
         <Divider />
         <Typography variant = 'h5' style = {{marginTop : '1em',  marginBottom : '1em'}}>
           Step 1: Select LiDAR Data
        </Typography>
      <Divider />
      </div>

      
    <div>
        <FileUpload />
    </div>
    <Divider />

    <div className = {classes.selectImage} >
      <Typography variant = 'h6' style = {{marginTop : '1em',  marginBottom : '1em'}}>
        Select Image
      </Typography>
      <Divider />

   <div className = {classes.body}>
     <div className = {classes.box2}>
      <div className = {classes.textClock}>
         <Typography  variant = 'h6'>Slope Angle (deg)</Typography>
      </div>

      <div className = {classes.lidraClock}>
      <TextField
            className = {classes.textField}
         
             id="filled-number"
            //  label="Number"
             type="number"
               InputLabelProps={{
                shrink: true,
               }}
              variant="outlined"
             />
      </div>
      </div>

<div className = {classes.loadImage}>
    <div>
        <Typography  variant = 'h6'>
            Load Image
        </Typography>
    </div>

    <div> 
    <ImageUpload />
    </div>
</div>
  
  <div className = {classes.box3}>
    <div className = {classes.textClock}>
      <Typography  variant = 'h6' style = {{font : 'bold'}}>Image Clock</Typography>
    </div>
    <div className = {classes.lidarClock}>
    <TextField  fullWidth variant="outlined" />

    </div>
  </div>

  <div className = {classes.box4}> 
      <div className = {classes.textClock}>
      <Typography  variant = 'h6' >LiDAR Clock</Typography>
      </div>
      <div className = {classes.lidarClock}>
      <TextField   variant="outlined"  fullWidth />
      </div>
  </div>

  <div className = {classes.box5}> 
      <div className = {classes.textClock}>
      <Typography  variant = 'h6'>Prepend Dist(cm)</Typography>
      </div>
      <div className = {classes.lidarClock}>
      <TextField  variant="outlined"  fullWidth />
      </div>
  </div>

  <div className = {classes.box6}> 
      <div className = {classes.textClock}>
      <Typography  variant = 'h6'>Ground Dist (cm/pix)</Typography>
      </div>
      <div className = {classes.lidarClock}>
      <TextField id="outlined-basic"  variant="outlined"   fullWidth/>
      </div>
  </div>
    </div> 
        </div>
        </Container>
         <Canvas />
         </div>
    )
}

export default Mockup

