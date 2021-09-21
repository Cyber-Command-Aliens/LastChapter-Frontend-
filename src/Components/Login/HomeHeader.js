import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import Button from '@mui/material/Button';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'cursive',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  btn: {
    width:'150px',
    color: '#1DB9C3',
    fontSize: '4rem',
    background:'#7027A0',
    
  },
  colorText: {
    color: '#7027A0',
  },
  colorText2: {
    color: '#2D46B9',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#1DB9C3',
    fontSize: '5rem',
  },
}));
export default function HomeHeader() {
    const { loginWithRedirect } = useAuth0();
    
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
          <span className={classes.colorText}> Last</span>
         <span className={classes.colorText2}>Chapter.</span>
          </h1>
         
    <Button className={classes.btn} variant="contained" disableElevation  onClick={() => loginWithRedirect()}>
      Log in
    </Button>


        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
          <span className={classes.colorText}>Welcome to</span>
             
             <span className={classes.colorText2}> My<br /></span>
           <span className={classes.colorText}>LastChapter Book.</span>
          </h1>
          <Scroll to="card" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}