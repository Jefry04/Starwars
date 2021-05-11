import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            STAR WARS
          </Typography>
          <div align="left">
            <Button color="inherit" component={RouterLink} to="/people">
              PERSONAJES
            </Button>
            <Button color="inherit" component={RouterLink} to="/planets">
              PLANETAS
            </Button>
            <Button color="inherit" component={RouterLink} to="/ships">
              NAVES
            </Button>
            <Button color="inherit" component={RouterLink} to="/vehicles">
              VEHICULOS
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
