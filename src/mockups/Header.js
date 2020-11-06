import React from 'react'
import { Container , CssBaseline, Typography, AppBar, Toolbar, Button, FormControl, Select, InputLabel} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import UndoIcon from '@material-ui/icons/Undo';
import RepeatIcon from '@material-ui/icons/Repeat';
import RedoIcon from '@material-ui/icons/Redo';
import CropIcon from '@material-ui/icons/Crop';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor : 'lightBlue',
      width : 790,
      height : 120
    },
    formControl: {
        margin: theme.spacing(4),
        minWidth: 160,
        marginRight : '3em',
        marginTop : '1em'
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
   

    title: {
      flexGrow: 1,
    },

    iconDiv : {
        marginTop : '3em'
    },
    icons : {
        color : 'black'
    },

    icon : {
        color : 'gray'
    },

    material : {
        border : '1px solid gray',
        borderRadius : '4px',
        display: 'block',
    padding: '8px',
    marginBottom: '80px', /* SIMPLY SET THIS PROPERTY AS MUCH AS YOU WANT. This changes the space below box1 */
    textAlign: 'justify',
    width: '25%', 
    float:'left',
    margin: '5px'
        
    }
  }));

function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    return (
        <div>
            <AppBar position = 'static' className = {classes.root}>
                 <Toolbar>
                 <div className = {classes.iconDiv}>
                 <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                  <div className = {classes.material}>
                  <ArrowUpwardIcon className = {classes.icons}/>
                    </div>   

                    <div  className = {classes.material}>
                    <ArrowDownwardIcon className = {classes.icon}/>
                    </div>
           
                  <div  className = {classes.material}>
                  <UndoIcon className = {classes.icon}/>
                  </div>

                  <div  className = {classes.material}>
                  <RedoIcon className = {classes.icon}/>
                  </div>
          
                 <div  className = {classes.material}>
                <CropIcon className = {classes.icon}/>
                </div>

                <div  className = {classes.material}>
                <RepeatIcon className = {classes.icon}/>
                </div>
         
               <div  className = {classes.material}>
              <ZoomInIcon className = {classes.icon}/>
             </div>
    
           <div  className = {classes.material}>
           <ZoomOutIcon className = {classes.icon}/>
          </div>
          
          </IconButton>
          </div>

          <div className = {classes.select} style = {{marginTop : '0rem'}}>
          <FormControl variant="outlined" className={classes.formControl} style = {{marginTop : '0em'}}>
        <InputLabel htmlFor="filled-age-native-simple">Zoom Options</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'Zoom',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Zoom-In</option>
          <option value={20}>Zoom-out</option>
          <option value={30}>Normal</option>
        </Select>
      </FormControl>
      </div>
                 </Toolbar>
                 </AppBar>
        </div>
    )
}

export default Header
