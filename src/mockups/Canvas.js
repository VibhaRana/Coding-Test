
import React from 'react'
import { Container , CssBaseline, Typography, AppBar, Toolbar, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Header from './Header'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
function Canvas() {
    
    const classes = useStyles();
    return (
       <React.Fragment>
             <CssBaseline />
             <Container fluid >
                 <Header />
        <Typography component="div" style={{ backgroundColor: 'lightGrey', height: '50vh', width : '100vh' }} />
      </Container>
        </React.Fragment>
    )
}

export default Canvas
