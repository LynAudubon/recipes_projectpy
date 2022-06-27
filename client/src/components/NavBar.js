import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to='/' style={{textDecoration:'none', color:'whitesmoke'}}>
                 <HomeIcon />
            </Link>
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link to='/add-recipe' style={{textDecoration:'none', color:'whitesmoke'}}>
                <Button color="inherit">Add Recipe</Button>
            </Link>
          </Typography>
          <Link to='/login' style={{textDecoration:'none', color:'whitesmoke'}}>
            <Button color="inherit">Login</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

