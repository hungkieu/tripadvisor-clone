import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
});

const NavigationAction = ({ label, icon, link }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {icon}
      <Typography variant={link ? 'subtitle2' : 'caption'}>{label}</Typography>
    </div>
  );
};

export default NavigationAction;
